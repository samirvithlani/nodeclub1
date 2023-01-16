//schema create...
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({

    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    }


})
// mongoose.model('User',userSchema);
// module.exports = userSchema;
module.exports = mongoose.model('User',userSchema);