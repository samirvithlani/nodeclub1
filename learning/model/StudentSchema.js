const mongoose = require('mongoose');
//schema is a class
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
{

    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email:{
        type: String,
        unique: [true,"Email already exists"],
    },
    password:{
        type: String,
        required: [true, 'Password field is required']
    },
    age:{
        type: Number,
    },
    type:[{
        type: Schema.Types.ObjectId,
        ref: 'StudentType'
    }]
},
{
    timestamps: true
});
// mongoose.model('student', StudentSchema);
// module.exports =StudentSchema;
module.exports = mongoose.model('student', StudentSchema);