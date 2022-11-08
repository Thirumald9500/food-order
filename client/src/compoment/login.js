import React,{useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css"
import { CgProfile } from "react-icons/cg";
import { Si1Password } from "react-icons/si";
import { MdFoodBank } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () =>{
    const navigate = useNavigate();
    const [loginstatus,setloginstatus]=useState("")
    axios.defaults.withCredentials=true;//cors
    const [data,setdata]=useState({
        name:"",
        password:""
    })

    const handle = (e) => {
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setdata(newdata)
    } 


    const submit = (e) =>{
        axios.post("http://localhost:7001/login",{
            name:data.name,
            password:data.password,
        }).then((Response =>{
            const res = Response.data;
            if (res.message){
                alert(res.message)
            }
            else{
                console.log(Response.data);
                // navigate("/product")
            }
        } ))
    }
    const register = () =>{
        return navigate("/register")
    }
    return(
        <div className="container">
            <MdFoodBank className="logo" />
            <div className="heading">
                <h4>Welcome Back</h4>
                <h6>Enter your credentials to access your account</h6>
            </div>
            <div className="box">
                <form>
                    <div className="form-group ">
                    <CgProfile className="mailicon"/>
                    <input type="text" value={data.name} onChange={(e)=> handle(e)}
                    className="form-control" placeholder="Username" id="name"/>
                    </div>
                    <div className="form-group log-status">
                    <Si1Password className="mailicon"/>
                    <input type="password" className="form-control" placeholder="Enter Password" id="password"
                    onChange={(e) => handle(e)} value={data.email} />
                    </div>
                    <div className="form-group2">
                        <button type="button" onClick={submit} className="log-btn "> Log in</button>
                    </div>
                    <div className="form-group2">
                        <button type="button" className="log-btn2" onClick={register} > Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;