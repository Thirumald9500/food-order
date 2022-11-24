const express = require("express")
const router=express.Router()
const cors =require("cors")
const parser =require("body-parser")
const bcrypt = require("bcrypt")
const mysql = require('mysql2')
const session = require('express-session')
const cookie = require("cookie-parser")
const secret =require("./security")
const config = require('./config/config')
const Tokens = require("./authentication")


// database connection
const db=mysql
const con=db.createConnection({
    host:"localhost",
    user:"root",
    password:"9500770814",
    database:"food"
});
// checking database connection
con.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("sucess");
})
//Encryption digits
var saltRounds=10;


// server route
router.get("/",(req,res)=>{
    res.send("server is on sundar control")
    console.log();
    res.send(security.serect)
});
router.use(cors({
    origin:["http://localhost:3000","http://localhost:3001"],
    methods:["GET","POST"],
    credentials:true
}));
router.use(cookie())
router.use(session({
    key:secret.key,//calling from another file
    secret:secret.serect,// calling from another file
    resave: false,
    saveUninitialized:false,
    cookie:{
        expres:60 * 60 * 24, //cookie data will be expriry time
    }
}))
router.use(express.json())
router.use(parser.urlencoded({extended:true}))




//login form 
router.post("/login",(req,res)=>{
    const data = req.body
    const name = data.name;
    const cookie_data = config.cookie_details
    const password = data.password;
    con.query("select * from login where username = ?",[name],(err,result)=>{
        if (err){
            res.send({err:err})
        }
        if (result.length > 0){
            const password2=result[0].password
            bcrypt.compare(password,password2,(err,response)=>{
                if(response){
                    // jwt token
                    const id = result[0].slno;
                    // createing token
                    console.log(cookie_data)
                    const token = Tokens.t_gen(id)
                    res.cookie(cookie_data
                        .c_name,token,{
                        expires:secret.time
                    })
                    // data=req.cookies.id
                    // console.log(data);
                    res.send({result:result})
                }else{
                    res.send({message:"invalid password"})
                }
            });
        }else{
            res.send({message:"invalid user"})
        }
    })
})






//register form
router.post("/register",(req,res) =>{
    const data = req.body;
    const name = data.name;
    const email=data.email;
    const password = data.password;
    // encrypt password
    bcrypt.hash(password,saltRounds,(err,hash)=>{
        if (err){
            console.log(err);
        }else{
        const query="insert into login(username,emailid,password) values(?,?,?)"
        con.query(query,[name,email,hash],(err,result) =>{
        if (err) {
            console.log(err);
            res.send("err")
        }
        else{
        res.send("sucessful")
        }
        })
        }
    })
})

//cart
router.post("/cart",(req,res)=>{
    const data =req.body;
    console.log(data)
    const foodname = data.foodname;
    const price = data.price;
    const url = data.url;
    const query = "insert into cart(foodname,price,url)values(?,?,?)"
    con.query(query,[foodname,price,url],(err,result)=>{
        if (err){
            console.log(err);
            res.send("err")
        }
        else{
            console.log(result);
            res.send(result)
        }
    })
})
// products
router.get("/product",(req,res) =>{
    const query="select * from products"
    con.query(query,(err,result)=>{
        if (err){
            res.send(err)
        }
        if(result === []){
            res.send("empty")
        }
        else{
            res.send(result)
        }
    })
})
//cartpage
router.get("/cartpage",(req,res) =>{
    const query="select * from cart"
    con.query(query,(err,result)=>{
        if (err){
            res.send(err)
        }
        if(result === []){
            res.send("empty")
        }
        else{
            res.send(result)
        }
    })
})
//delete
router.post("/delete_item",(req,res)=>{
    const data = req.data;
    const slno = data.slno;
    console.log(data.slno);
    const query = "DELETE FROM cart WHERE slno = ?"
    con.query(query,[slno],(err,result)=>{
        if (err){
            return res.send({'status':'failure','msg':err.message})
        }
        else{
           // console.log(result)
            res.send("deleted");
        }
    })
})

// order
router.post("/order",(req,res)=>{
    const data=req.body;
    const name=data.name;
    const Number=data.number;
    const address=data.address;
    const landmark=data.landmark;
    const query="insert into orders(name,number,address,landmark)values(?,?,?,?)"
    con.query(query,[name,Number,address,landmark],(err,result)=>{
        if (err){
            console.log(err);
            res.send("err")
        }
        else{
            console.log(result);
            res.send(result)
        }
    })
})

module.exports = router;
