import React from "react";
import "../csstemplates/navbar.css";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" >
          My Shoping
        </span>
        <div className="cart" >
          <span>
            <CiShoppingCart/>
          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
