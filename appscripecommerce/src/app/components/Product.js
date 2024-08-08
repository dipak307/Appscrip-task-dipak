'use client';
import React, { useState } from 'react';
import "./Product.css";
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const Product = ({ product }) => {
  const { title, image } = product;
  const [heart, setHeart] = useState(true);

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <p className="title">{title}</p>
        <p className="signin">
          <a href="#">Sign in</a> or create an account to see prices
        </p>
        <div className="heart" onClick={() => setHeart(!heart)}>
          {heart ? (
            <FaRegHeart />
          ) : (
            <FaHeart color="red" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
