import React from "react";
import "../csstemplates/navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop"  onClick={()=>navigate('/product')}>
          My Shoping
        </span>
        <div className="cart" >
          <span onClick={()=>navigate('/cart')}>
            <CiShoppingCart/>
          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
