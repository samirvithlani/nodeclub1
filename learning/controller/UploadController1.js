const multer = require("multer");
const path = require("path");

//storeage
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 900000000},

}).single('file');

exports.uploadFile = (req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.json({
                success: false,
                message: err
            })
        }
        else{
            if(req.file == undefined){
                res.json({
                    success: false,
                    message: "No file selected"
                })
            }
            else{
                //upload controle    --> req.file.path
                res.json({
                    success: true,
                    message: "File uploaded successfully" + req.file.originalname
                })
            }
        }
    })
}