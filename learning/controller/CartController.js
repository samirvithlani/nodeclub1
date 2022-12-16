const cartSchema = require('../model/CartSchema');

exports.createCart =(req,res)=>{

    const cart =  new cartSchema(req.body);
    cart.save((err,data)=>{
        if(err){
            res.status(500).json({
                message: "Some error occurred while creating the cart.",
            });
        }
        else{
            res.status(200).json({
                message: "Cart created successfully",
                data: data
            })
        }
    })

}

exports.getCart = (req,res)=>{

    cartSchema.find().populate('products').populate('user').exec((err,products)=>{
        if(err){
            res.status(500).json({
                message: "Some error occurred while retrieving the cart.",
            });
        }
        else{
            res.status(200).json({
                message: "Cart retrieved successfully",
                data: products
            })
        }
    })
}

//getcart by user id
