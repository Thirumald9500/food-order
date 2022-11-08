
const jwt = require("jsonwebtoken")
const secret =require("./security")
// token generactor
const t_generactor=(id)=>{
    const token= jwt.sign({id},secret.key)
    return token
    }

// token validation
const t_validate = (Token)=>{
    try{
        const data =jwt.verify(Token,secret.key)
        return(data)
    }catch (error){
        console.log(error);
        return(error)
    }
}

module.exports={
    t_gen:t_generactor,
    t_validate:t_validate,
}