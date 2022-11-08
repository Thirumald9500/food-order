import React from "react";
import "../csstemplates/home.css";
import { MdFoodBank } from 'react-icons/md';
import { HiOutlineDeviceMobile } from 'react-icons/hi';


const Home = () =>{
    return(
            <div className="containerfluid">
                <div className="header">
                   <div className="brand">
                        <MdFoodBank className="brand"/>
                        <h1 className="brandname">FoodLand</h1>
                    </div> 

                    <div className="deliverybox">
                        <div className="contact">
                            <h6>Express Delivery</h6>
                            <h5>1800400424</h5>
                        </div>
                        <HiOutlineDeviceMobile className="delivery"/>
                    </div>
                </div>
                <div className="foodhome">
                    <div className="banner">
                          <h1>hello</h1>
                    </div>
                    <div className="banner2">
                          <h1 id="h_food">Safe</h1>
                          {/* <h1>FOOD</h1>
                          <h1>delivery</h1> */}
                    </div>
                    
            </div>            
            </div>
            
    )
}
export default Home;