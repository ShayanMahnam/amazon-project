import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
 
function Header(){
    return (
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header_logo">
            <StorefrontIcon className="header_logoImage" fontSize="large" />
            <h2 className="header_logoTitle">eShop</h2>
          </div>
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <div className="nav_item">
            <span className="nav_itemLineOne">Hello Guest</span>
            <span className="nav_itemLineTwo">Sing in</span>
          </div>
          <div className="nav_item">
            <span className="nav_itemLineOne">Your</span>
            <span className="nav_itemLineTwo">Shop</span>
          </div>
          <Link to="/Checkout" style={{ textDecoration: "none" }}>
            <div className="itemBasket">
              <ShoppingBasketIcon />
              <span className="nav_itemLineTwo   nav_basketCount">0</span>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Header;