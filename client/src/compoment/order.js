import React,{useState} from "react";
import "./order.css"
import { CgProfile } from "react-icons/cg";
import { Si1Password } from "react-icons/si";
import { BiMobileAlt } from "react-icons/bi";
import { ImLocation2} from "react-icons/im";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdFoodBank } from 'react-icons/md';
import {FaLandmark} from 'react-icons/fa'

const Order = () =>{
    const navigate = useNavigate();
    const [data,setdata]=useState({
        name:"",
        number:"",
        address:"",
        landmark:"",
    })

    const handle = (e) => {
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setdata(newdata)
        console.log(data);
    } 

    const submit = (e) =>{
        axios.post("http://localhost:7001/order",{
            name:data.name,
            number:data.number,
            address:data.address,
            landmark:data.landmark,
        }).then((Response =>{
            const res = Response.data;
            if (res === "err"){
                alert("orders name is already exist")
            }
            else{
                alert("login sucess")
                console.log(res);
                navigate("/")
            }
        } ))
    }

    const register = () =>{
        return navigate("/register")
    }
    return(
        <div className="o_conatiner">
            <div className="order_box">
                <div className="order_form">
                <div className="form_heading">
                    <div className="brand">
                        <MdFoodBank className="logo2" />
                        <h1 id="brandname">FoodLand</h1>
                    </div>
                    <h6>Enter your credentials to access your account</h6>
                </div>
                <form>
                    <div className="form-group ">
                    <CgProfile className="mailicon"/>
                    <input type="text" value={data.name} onChange={(e)=> handle(e)}
                    className="form-control" placeholder="Name" id="name"/>
                    </div>
                    <div className="form-group log-status">
                    <BiMobileAlt className="mailicon"/>
                    <input type="number" className="form-control" placeholder="Mobile number" id="number"
                    onChange={(e) => handle(e)} value={data.number} />
                    </div>
                    <div className="form-group log-status">
                    <ImLocation2 className="mailicon"/>
                    <input type="text" className="form-control" placeholder="Address" id="address"
                    onChange={(e) => handle(e)} value={data.address} />
                    </div>
                    <div className="form-group log-status">
                    <FaLandmark className="mailicon"/>
                    <input type="text" className="form-control" placeholder="Landmark" id="landmark"
                    onChange={(e) => handle(e)} value={data.landmark} />
                    </div>
                    <div className="form-group3">
                        <button type="button" onClick={submit} className="log-btn ">Order Now</button>
                    </div>
                    <div className="form-group3">
                        <button type="button" className="log-btn2" onClick={register} > Back</button>
                    </div>
                </form>
                </div>            
            </div>
        </div>
    )
}
export default Order;