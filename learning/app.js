const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 3000;
const userRoutes = require('./routes/UserRoutes');

app.use('/user',userRoutes);
//db connection -> mongo db --> mongodb   / mongoose
//localhost:3000/user/test

mongoose.connect('mongodb://127.0.0.1:27017/nodeclub1',
 {useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log('DB CONNECTED');
}).catch((err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})



