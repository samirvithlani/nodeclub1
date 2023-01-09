const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamSchema = new Schema({

    name:{
        type: String,
    },
    description:{
        type: String,
    }

})
module.exports = Exam = mongoose.model('exam', ExamSchema);