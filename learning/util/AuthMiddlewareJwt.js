const authToken = require('./AuthToken');


const tokenMiddleware =(req, res, next) => {


    const token = req.headers.authorization;
    console.log("token",token);
    if(!token){
        res.status(401).json({
            message:"Unauthorized"
        })
    }
    else{
        authToken.verifyToken(token).then((data)=>{
            req.user = data;
            next();
        }).catch((err)=>{
            res.status(401).json({
                message:"Unauthorized"
            })
        })
    }


}
module.exports = {tokenMiddleware};