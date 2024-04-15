import React, { useState } from "react";
import "./Navbar.css";
import LocationToolTip from "../LocationToolTip/LocationToolTip";

import Cart from "../../icons/cart.png"
import FlipKartIcon from "../../icons/FlikartIcon.png"


const Navbar: React.FC = () => {
  
  return (
    <nav className="nav-conatiner">
      <div className="empty-class"></div>
      <div className="navlinks-conatiner">
        <div className="logo">
          <h2><em>Grocery</em></h2>
        </div>
        <div className="search">
          <form style={{display:"flex",justifyContent:"space-between"}}>
            <input type="search" placeholder="Search Grocery Products..." />
            <button type="submit">Search Grocery Products</button>
          </form>
        </div>
        <div className="delivery">
            <LocationToolTip />
        </div>
        <div className="login">
          <button>Login</button>

        </div>

        <div className="cart">
             <img src={Cart} alt="cart" />
             <p>Cart</p>
        </div>
          
        
        
      </div>
      <div className="flipkart-logo">
             <img src={FlipKartIcon} alt="Flipkart"  height={"100%"} width={"100%"}/>
        </div>

     
    </nav>
  );
};

export default Navbar;
