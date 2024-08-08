'use client';
import React, { useState } from 'react';
import "./CustomizeColumn.css";

const CustomizeColumn = ({ filters, onFilterChange }) => {
  const [data, showData] = useState(true);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    onFilterChange(name, checked);
  }

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  }

  return (
    <>
      <div className="column customize">
        <div>
          CUSTOMIZE <input type='checkbox' />
        </div>
        <div>
          <select onClick={() => showData(!data)} style={{ border: "none", backgroundColor: "white" }}>
            <option>All</option>
          </select>
          {!data && (
            <div>
              <label id='customelable'>
                Men
                <input type='checkbox' name="men" checked={filters.men} onChange={handleCheckboxChange} />
              </label>
              <label id='customelable'>
                Women
                <input type='checkbox' name="women" checked={filters.women} onChange={handleCheckboxChange} />
              </label>
              <label id='customelable'>
                Baby & Kids
                <input type='checkbox' name="babyAndKids" checked={filters.babyAndKids} onChange={handleCheckboxChange} />
              </label>
            </div>
          )}
          <hr />
        </div>
        <div className="customize-options">
          <label htmlFor="occasion">OCCASION</label>
          <select style={{ border: "none", backgroundColor: "white" }} id="occasion" name="occasion" value={filters.occasion} onChange={handleSelectChange}>
            <option value="">All</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="office">Office</option>
          </select>
          <hr />
          <label htmlFor="work">WORK</label>
          <select style={{ border: "none", backgroundColor: "white" }} id="work" name="work" value={filters.work} onChange={handleSelectChange}>
            <option value="">All</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="office">Office</option>
          </select>
          <hr />
          <label htmlFor="fabric">FABRIC</label>
          <select style={{ border: "none", backgroundColor: "white" }} id="fabric" name="fabric" value={filters.fabric} onChange={handleSelectChange}>
            <option value="">All</option>
            <option value="t-shirt">T-shirt</option>
            <option value="box-design">Box Design</option>
            <option value="plain">Plain</option>
          </select>
          <hr />
          <label htmlFor="segment">SEGMENT</label>
          <select style={{ border: "none", backgroundColor: "white" }} id="segment" name="segment" value={filters.segment} onChange={handleSelectChange}>
            <option value="">All</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="office">Office</option>
          </select>
          <hr />
          <label htmlFor="suitableFor">SUITABLE FOR</label>
          <select style={{ border: "none", backgroundColor: "white" }} id="suitableFor" name="suitableFor" value={filters.suitableFor} onChange={handleSelectChange}>
            <option value="">All</option>
            <option value="cotton">Cotton</option>
            <option value="normal">Normal</option>
            <option value="silky">Silky</option>
          </select>
          <hr />
          <label htmlFor="rawMaterial">RAW MATERIAL</label>
          <select style={{ border: "none", backgroundColor: "white" }} id="rawMaterial" name="rawMaterial" value={filters.rawMaterial} onChange={handleSelectChange}>
            <option value="">All</option>
            <option value="office">Office</option>
            <option value="home">Home</option>
          </select>
          <hr />
          <label htmlFor="pattern">PATTERN</label>
          <select style={{ border: "none", backgroundColor: "white" }} id="pattern" name="pattern" value={filters.pattern} onChange={handleSelectChange}>
            <option value="">All</option>
            <option value="office">Office</option>
            <option value="home">Home</option>
          </select>
          <hr />
          {/* Add more filter options as needed */}
        </div>
      </div>
    </>
  );
}

export default CustomizeColumn;
