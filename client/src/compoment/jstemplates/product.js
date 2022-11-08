import React,{useEffect, useState} from "react";
import '../csstemplates/product.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Product = () =>{
    const navigate = useNavigate();
    const [foodshow,setfoodshow]= useState([]);
    // const display = foodshow.map((item) => <li>{item.price}</li>)
    useEffect(()=>{
        axios.get("http://localhost:7001/product").then((Response)=>{
            setfoodshow(Response.data);
        })
    },[])
    const submit1=(e)=>{
        e.preventDefalut();
       // console.log(item,"hiut")
    }

    return(
        <div className="containerfluid2">
            <div className="products">
                <div className="p_heading">
                    <h1>Choose & Enjoy</h1>
                    <p>Food is symbolic of love when words are inadequate.” “My weaknesses have always been food and men – in that order.”<br></br>“I know once people get connected to real food, they never change back.”</p>
                </div>
                    <div className="row ">
                        {foodshow.map((item)=>{
                            return(
                                <div className="col-md-3  d-inline-flex p-1 justify-content-center">
                                    <div className="card"  style={{width: '18rem'}}>
                                    <img className="card-img-top" src={item.url} alt="Card cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{ item.foodname}</h5>
                                            <p className="card-text">Price : {item.price}</p>
                                        </div>
                                    <div class="card-footer text-center">
                                        <button className="btn btn-primary" type="button" onClick={submit1(item)}>Add To Cart</button>
                                    </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </div>
    )
}
export default Product;