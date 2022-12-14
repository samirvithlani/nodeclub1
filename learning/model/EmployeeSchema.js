const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password:{
        type: String,
    },
    department:[{
        type: Schema.Types.ObjectId,
        ref:'Department'

    }]    
})
module.exports = mongoose.model("Employee", employeeSchema);