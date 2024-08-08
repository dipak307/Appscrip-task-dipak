// MainContent.js
'use client';
import React from 'react';
import './MainContent.css';


const MainContent = () => {
  return (
    <main>
      <div className="containermenu">
        <div className="contentmenu">
        <a href='/' className="content-itemsss" style={{color:"#33333370; !important"}}>HOME</a>
        <a href='/' className="content-itemsss">SHOP</a>
          <a href='/' className="content-item">SHOP</a>
         <a href='/' className="content-item">SKILLS</a>
          <a href='/' className="content-item">STORIES</a>
          <a href='/' className="content-item">ABOUT</a> 
          <a href='/' className="content-item">CONTACT US</a>
        </div>
      </div>
      <hr  />
    </main>
  );
}

export default MainContent;
