const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


 const userRoutes = require('./routes/UserRoutes');
const departmentRoutes = require('./routes/DepartmentRoutes');
const employeeRoutes = require('./routes/EmployeeRoutes');
 const productRoutes = require('./routes/ProductRoutes');
// const cartRoutes = require('./routes/CartRoutes');
const uploadRoutes = require('./routes/UploadRoutes');
const studentRoutes = require('./routes/StudentRoutes');
const studentTypeRoutes = require('./routes/StudentTypeRoutes');
const examRoutes = require('./routes/ExamRoutes');
const studentExamRoutes = require('./routes/StudentExamRoutes');
app.use('/user',userRoutes);
app.use('/department',departmentRoutes);
app.use('/employee',employeeRoutes);
app.use('/product',productRoutes);
// app.use('/cart',cartRoutes);
app.use('/upload',uploadRoutes);
app.use('/student',studentRoutes);
app.use('/studentType',studentTypeRoutes);
app.use('/exam',examRoutes);
app.use('/studentexam',studentExamRoutes);
//db connection -> mongo db --> mongodb   / mongoose
//localhost:3000/user/test
require('dotenv').config();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://samir:samir@cluster0.key63fx.mongodb.net/nodeclub1?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log('DB CONNECTED');
}).catch((err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})



