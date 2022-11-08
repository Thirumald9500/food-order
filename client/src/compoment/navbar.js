import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" >
          My Shoping
        </span>
        <div className="cart" >
          <span>
            <i className="fa fa-cart-plus"></i>
          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
