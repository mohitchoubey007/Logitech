const express = require('express')
const app = express()
const port = 3000
const cors =require('cors');
const mongoose=require("mongoose");
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const paymentRouter=require('./routes/paymentRouter.js')
const userRouter = require("./routes/user.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/',async(req,res)=>{
    res.status(200).send({
        message:"app server is running "
    });
});
app.use("/user", userRouter);
app.use('/payment',paymentRouter);
mongoose.connect("mongodb+srv://mohitchoubey284:mohit1234@cluster0.wfoq4z5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{ useNewUrlParser: true, useUnifiedTopology: true,},);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
app.get('/payment/getkey',(req,res)=>
  res.status(200).json({key:process.env.RAZORPAY_API_KEY})
);
