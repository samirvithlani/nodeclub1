const { model } = require('mongoose');
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
            res.status(200).json({
                message:"success",
                data:data
            })
        }
    })
    
})
module.exports.creteUser = ((req,res)=>{

    //create user object
    console.log("req body",req.body);
    var user = new userSchema(req.body)
    user.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{
            res.status(201).json({
                message:"success",
                data:data
            })
        }
    })
})

exports.deleteUser = ((req,res)=>{

    var id = req.params.id;
    userSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{
            if(data==null){
                res.status(404).json({
                    message:"not found",
                })
            }
            else{
                res.status(200).json({
                    message:"success",
                    data:data
                })
            }
        }

    })

})
exports.getUserById = ((req,res)=>{

    var id = req.params.id;
    userSchema.findById(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{
            if(data!=null){
                res.status(200).json({
                    message:"success",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"not found",

                })
            }
        }
    })

})

exports.updateUser = ((req,res)=>{

    var id = req.params.id
    userSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{
            if(data!=null){
                res.status(200).json({
                    message:"success",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"not found",

                })
            }
        }
    })
})