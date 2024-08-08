'use client';
import React, { useState } from 'react';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import {FiSearch, FiShoppingBag} from 'react-icons/fi';
import './Navigation.css';

const Navigation = ({menu}) => {

  return (
    <header>
      <nav>
        <ul className="navigation-list"> 
          <li><a href="#"><FiSearch /></a></li>
          <li><a href="#"><FaRegHeart /></a></li>
          <li><a href="#"><FiShoppingBag /></a></li>
          <li className={menu?'userss':""}><a href="#"><FaRegUser /></a></li>
          <li className={menu? "userss":"" }><a href="#"><select style={{border:"none",backgroundColor:"white"}} ><option id='options' >ENG</option>
          </select></a></li>    
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;




