const userSchema = require('../model/UserSchema');
//req,res
module.exports.testUser =((req,res)=>{
    console.log('testUser');
    res.send('testUser');

})
module.exports.getAllUsers = ((req,res)=>{

    userSchema.find((err,data)=>{

        if(err)
        {
            res.send("error")
        }
        else{
            res.send(data)
        }

    })
    

})
