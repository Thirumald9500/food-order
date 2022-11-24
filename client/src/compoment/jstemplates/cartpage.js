import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiDiscount1 } from "react-icons/ci";

const Cart = () => {
    const [cartdata,setcartdata] = useState([]);
    const navigate = useNavigate();
    const [count,setcount] = useState(1);
    useEffect(()=>{
        axios.get("http://localhost:7001/cartpage").then((Response)=>{
            setcartdata(Response.data);
        })
    },[])
    const delete_item = (item) =>{
        console.log(item.slno,'hit');
        axios.post("http://localhost:7001/delete_item",{slno:item.slno}).then((Response)=>{
            console.log(Response)
            console.log(item.slno)
        })
        
    }
    return(
       
        <div className="containerfluid2">
        <div className="products">
            <div className="p_heading">
                <h1>Choose To Buy</h1>
                <p>Food is symbolic of love when words are inadequate.” “My weaknesses have always been food and men – in that order.”<br></br>“I know once people get connected to real food, they never change back.”</p>
            </div>
                <div className="row ">
                    {cartdata.map((items)=>{
                        return(
                            <div className="col-md-3  d-inline-flex p-1 justify-content-center">
                                <div className="card"  style={{width: '18rem'}}>
                                <img className="card-img-top" src={items.url} alt="Card cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{ items.foodname}</h5>
                                        <p className="card-text" >Price : {items.price}</p>
                                        <p className="card-text">Product Price : {count*items.price}</p>
                                    </div>
                                <div className="card-footer text-center">
                                    <input type="button" onClick={()=>count(items.count,1)} value="-" />
                                    <input type="text" name="quantity" value={count}  size="1" id="number" />
                                    <input type="button" onClick={()=>setcount(count+1)} value="+" />
                                    <button className="btn btn-primary" type="button" onClick={()=>delete_item(items)}>click to delete</button>
                                    
                                </div>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
                <p>Total Price: </p>
                <div className="card-footer text-center">
                    <button className="btn btn-primary" type="button" onClick={()=>navigate('/order')}>click to order</button>
                </div>
        </div>
    </div>
    )
}

export default Cart;
//create table cart(slno int PRIMARY KEY AUTO_INCREMENT,foodname varchar(40),price int(10),url varchar(350),count int(10));