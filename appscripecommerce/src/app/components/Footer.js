'use client';
import React,{useState} from 'react';
import Image from 'next/image';
import './Footer.css';

const Footer = () => {
    const [follow,followSet]=useState(true);
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-form">
            <input className='inputfield' type="email" placeholder="Enter your e-mail" />
            <button>SUBSCRIBE</button>
          </div>
          <hr className='formobile' />
        </div>
        <div className="footer-section contact">
          <h3 className='callus'>CONTACT US</h3>
          <p className='callus'>+44 221 133 5360</p>
          <p className='callus'>customercare@mettamuse.com</p>
          <h3 className='call'>CALL US</h3>
          <div className='callusmobile'>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          </div>
          <hr className='formobile'  />
          <h3>CURRENCY</h3>
          <div className='currency'>
          <img src='/usa.png' />
          <p>&#8226; </p>
          <p> USD</p>
          </div>
          {/* <hr className='formobile'  /> */}
          <p className='pcontents'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-container">
        <div className="links footer-section ">
          <h3>mettā muse</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliances Docs</a></li>
          </ul>
        </div>
        <div className="footer-section-links-mobile" >
          <select className='footerlink' style={{border:"none",backgroundColor:"black",color:"white"}}>
            <option id='firstoptions'>mettā muse</option>
            <option>About Us</option>
            <option>Stories</option>
            <option>Artisans</option>
            <option>Boutiques</option>
            <option>Contact Us</option>
            <option>EU Compliances Docs</option> 
          </select>
          <hr className='formobile'/>
        </div>
        <div className="links footer-section " >
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section-links-mobile" >
          <select className='footerlink' style={{border:"none",backgroundColor:"black",color:"white"}}>
            <option>QUICK LINKS</option>
            <option>Orders & Shipping</option>
            <option>Join/Login as a Seller</option>
            <option>Payment & Pricing</option>
            <option>Return & Refunds</option>
            <option>FAQs</option>
            <option>Privacy Policy</option>
            <option>Terms & Conditions</option>
          </select>
          <hr className='formobile'/>
        </div>
        <div className="footer-section follow" >
          <h3 className='followus'>FOLLOW US</h3>
          <div className="social-icons" >
           <a href="#"><img style={{padding:"5px"}} src="/instagram (2).svg" alt="Instagram" /></a> 
            <a href="#"><img style={{padding:"5px"}} src="/317750_linkedin_icon.png" alt="LinkedIn" /></a>
          </div>
          <div className="social-icons-mobile" >
           <select  className='footerlink' style={{border:"none",backgroundColor:"black",color:"white"}} onClick={()=>followSet(!follow)}><option>FOLLOW US</option></select>
          {follow?( <div className='social-icons-mobile'><a href="#"><img style={{padding:"5px"}} src="/instagram (2).svg" alt="Instagram" /></a> 
            <a href="#"><img style={{padding:"5px"}} src="/317750_linkedin_icon.png" alt="LinkedIn" /></a>
            </div>):""
           } </div>
           <hr className='formobile'/>
          <h3>mettā muse ACCEPTS</h3>
          <div className="payment-icons">
            <img style={{backgroundColor:"white", borderRadius:"5px"}} src="/google-pay.svg" alt="Google Pay" />
            <img style={{backgroundColor:"white", borderRadius:"5px"}} src="/mastercard.svg" alt="MasterCard" />
            <img style={{backgroundColor:"white", borderRadius:"5px"}} src="/Paypal.png" alt="PayPal" />
            <img style={{backgroundColor:"white", borderRadius:"5px"}} src="/Amex.png" alt="Amex" />
            <img style={{backgroundColor:"white", borderRadius:"5px"}} src="/apple-pay.svg" alt="Apple Pay" />
            <img style={{backgroundColor:"white", borderRadius:"5px"}} src="/visa-card.svg" alt="Visa" /> 
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;



