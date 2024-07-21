const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username :String,
    password : String
})
const PostSchema=new mongoose.Schema({
    vehicle: String,
    from:String,
    to:String,
    image:String,
    price:String,
    contact:String 
})
const paymentSchema = new mongoose.Schema({
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    razorpay_signature: {
      type: String,
      required: true,
    },
  });
const Payment=mongoose.model("Payment", paymentSchema);
const Posts =mongoose.model('Posts',PostSchema);
const User = mongoose.model('User', userSchema);
module.exports={
    User,
    Posts,
    Payment
}
