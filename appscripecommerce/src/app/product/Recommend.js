'use client';
import React, { useState } from 'react';
import './Recommend.css';

const Recommend = ({ setItem, item, totalProducts, selectedRecommendation, handleRecommendationChange }) => {
  const [selectedOption, setSelectedOption] = useState(selectedRecommendation);

  const handleChange = (value) => {
    setSelectedOption(value);
    handleRecommendationChange(value);
  };

  return (
    <>
      <hr />
      <div className="items-and-recommend">
        <div className="items-filter">
          <span className="items-count">{totalProducts} ITEMS</span>
          <button className="hide-filter" style={{ border: "none", backgroundColor: "white" }} onClick={() => setItem(!item)}>
            &lt; {item ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
          <button className="filters" style={{ border: "none", backgroundColor: "white"}} onClick={() => setItem(!item)}>
           FILTER
          </button>
        </div>
        <div className="recommend">
          <select
            className="custom-select"
            value={selectedOption}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="high-to-low">PRICE : HIGH TO LOW</option>
            <option value="low-to-high">PRICE : LOW TO HIGH</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Recommend;
