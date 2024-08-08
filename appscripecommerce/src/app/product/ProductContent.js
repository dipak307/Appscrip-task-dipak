'use client';
import React, { useState, useEffect } from 'react';
import './ProductContent.css';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Recommend from './Recommend';
import CustomizeColumn from './CustomizeColumn';

const ProductContent = ({ searchTerm }) => {
    const [item, setItem] = useState(false);

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState('recommended');
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    occasion: '',
    // Add more filters as needed
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
  };

  const handleRecommendationChange = (value) => {
    setSelectedRecommendation(value);
  };

  const applyFilters = (product) => {
    // if (filters.men && !product.category.includes('men')) return false;
    // if (filters.women && !product.category.includes('women')) return false;
    // if (filters.occasion && product.category !== filters.occasion) return false;
    // // Add more filtering conditions as needed
    // return true;

    if (filters.men && !product.category.includes('men')) return false;
  if (filters.women && !product.category.includes('women')) return false;
  
  // Occasion filter
  if (filters.occasion && product.occasion !== filters.occasion) return false;
  
  // Work filter
  if (filters.work && product.work !== filters.work) return false;
  
  // Fabric filter
  if (filters.fabric && product.fabric !== filters.fabric) return false;
  
  // Segment filter
  if (filters.segment && product.segment !== filters.segment) return false;
  
  // Suitable For filter
  if (filters.suitableFor && product.suitableFor !== filters.suitableFor) return false;
  
  // Raw Material filter
  if (filters.rawMaterial && product.rawMaterial !== filters.rawMaterial) return false;
  
  // Pattern filter
  if (filters.pattern && product.pattern !== filters.pattern) return false;

  // Add more filtering conditions as needed

  return true;
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  const getSortedProducts = () => {
    let sortedProducts = [...products];
    switch (selectedRecommendation) {
      case 'recommended':
        sortedProducts.sort((a, b) => (a.price - b.price));
        break;
      case 'newest':
        sortedProducts.sort((a, b) => (new Date(b.date) - new Date(a.date)));
        break;
      case 'popular':
        sortedProducts.sort((a, b) => (b.popularity - a.popularity));
        break;
      case 'high-to-low':
        sortedProducts.sort((a, b) => (b.price - a.price));
        break;
      case 'low-to-high':
        sortedProducts.sort((a, b) => (a.price - b.price));
        break;
      default:
        break;
    }
    return sortedProducts.filter(applyFilters);
  };

  const getFilteredProducts = () => {
    let filteredProducts = getSortedProducts();
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(search)
      );
    }
    return filteredProducts;
  };

  return (
    <main>
      <Recommend
         item={item}
        setItem={setItem}
        totalProducts={products.length}
        selectedRecommendation={selectedRecommendation}
        handleRecommendationChange={handleRecommendationChange}
      />

      <div className="container">
       {item? (<div className="customizeitems">
          <CustomizeColumn filters={filters} onFilterChange={handleFilterChange} />
        </div>):""
       }
        <div className="content">
          <div className="products">
            {getFilteredProducts().map(product => (
              <Product key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        
        </div>
      </div>
    </main>
  );
};

export default ProductContent;
