'use client';
import React,{useState} from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import ProductContent from "../product/ProductContent";
import "./pages.css";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }
  return (
    <>
      <Header  onSearch={handleSearch}/>
      <div className='App'>
        <MainContent />
        <div className="product-discovery">
         <div className="midHeading">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Lorelcome  to our product page where you can see new product here choose your ksl kldsklelkkldes favorite product !</p>
         </div>
         </div>
          <div className="columns">
            <div className='two'>
              <ProductContent searchTerm={searchTerm} />
            </div>
          </div>
       
        <Footer />
      </div>
      
    </>
  );
}
