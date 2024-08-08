'use client';
import React, { useState } from 'react'
import "./Header.css"
import Image from 'next/image';
import Navigation from "./Navigation"
import { FaBars } from 'react-icons/fa';
const Header = () => {
  const [menu,setMenu]=useState(true)
  return (
    <>
      <div class="top-bar">
            <p className='lorem'>lorem docke sklde klred?</p>
            <p>lorem dotedc sed Newsletter</p>
            <p className='lorem'>lorem docke sklde klred</p>
        </div>
<header className="header">
      <div className={menu?'menubar':"menubarsnot"}><FaBars className={menu?'menubar':"menubarsnot"} onClick={()=>setMenu(!menu)}/></div>
      <div className="logo"><img src="/applogo.jpeg"/></div>
      <h1>LOGO</h1>
      <Navigation menu={menu}/>
    </header>
    </>
  )
}

export default Header;