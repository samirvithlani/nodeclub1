const jwt = require('jsonwebtoken');
const secret = 'secret';


const generateToken = async(user)=>{

    const token = await jwt.sign(user.toJSON(),secret,{
        expiresIn: '7d'

    })

    return token;
    
}

const verifyToken = async(token)=>{
    const decoded = await jwt.verify(token,secret);
    return decoded;
}

module.exports = {generateToken,verifyToken}
