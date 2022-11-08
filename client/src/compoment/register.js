import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.css"
import { CgProfile } from "react-icons/cg";
import { Si1Password } from "react-icons/si";
import { MdFoodBank } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () =>{
    const navigate =useNavigate();
    const [data,setdata]=useState({
        name:"",
        email:"",
        password:"",
    })

    const handlechanges = (e) =>{
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setdata(newdata)
    }
    
    const submit = (e) =>{
        axios.post("http://localhost:7001/register",{
            name:data.name,
            email:data.email,
            password:data.password,
           }).then((Response)=>{
            console.log(Response.data)
            if (Response.data === "sucessful"){
                alert("registered")   
                navigate("/login")
            }
            else return (
                alert('Fill all Fields Correctly / user already exits')
            );
            
           })         
        }
        const login = () =>{
            return navigate("/login")   
        }

    return(
        <div className="containers">
            <MdFoodBank className="logo" />
            <div className="heading">
                <h4>Welcome To FoodLand</h4>
                <h6>Create your credentials to access your account</h6>
            </div>
            <div className="box">
                <form>
                    <div className="form-group ">
                    <CgProfile className="mailicon"/>
                    <input type="text" className="form-control"
                    onChange={(e) => {handlechanges(e)}}
                    placeholder="Username" id="name"/>
                    </div>
                    <div className="form-group log-status">
                    <Si1Password className="mailicon"/>
                    <input type="email" className="form-control"
                    onChange={(e) => {handlechanges(e)}}
                    placeholder="Enter your Email" id="email"/>
                    </div>
                    <div className="form-group log-status">
                    <Si1Password className="mailicon"/>
                    <input type="password" className="form-control"
                    onChange={(e) => {handlechanges(e)}}
                    placeholder="Enter your password" id="password"/>
                    </div>
                    <div className="form-group2">
                        <button type="button" onClick={submit} className="log-btn "> Register</button>
                    </div>
                    <div className="form-group2">
                        <button type="button" className="log-btn2" onClick={ login } > Login in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;