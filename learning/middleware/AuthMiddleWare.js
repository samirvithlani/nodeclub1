const departmenSchema = require("../model/DepartmentSchema");


const auth = (req, res, next) => {
  const obj = req.headers.auth;

  if (obj === undefined) {
    
    return res.status(401).json({
      message: "Unauthorized pass headers....",
    });

  } else {

    departmenSchema.findOne({_id:obj},(err,data)=>{

        if(err){
            return res.status(401).json({
                message: "Unauthorized pass headers....",
              });
        }

        else{
            if(data){
                if(data.name ==="HR"){
                    return next();
                }
                else{
                    return res.status(401).json({
                        message: "Unauthorized your department not allowed to access this inf",
                      });
                }
            }

        }

    })

    
  }
};
module.exports = { auth };
