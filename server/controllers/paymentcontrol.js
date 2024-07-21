const instance = require('../RazorpayInstance');
const crypto=require('crypto');
const {Payment}=require('../db/index.js');
exports.checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100), // amount in the smallest currency unit
            currency: 'INR',
            receipt: 'receipt#1',
        };

        const order = await instance.orders.create(options);
        //console.log(order);
        res.status(200).send(order);
    } catch (error) {
        console.error('Checkout Error:', error);
        res.status(500).send({
            message: 'Something went wrong',
            error: error.message,
        });
    }
};
exports.PaymentVerification = async (req, res) => {
    const Pay= new Payment(req.body);
    await Pay.save();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    // Database comes here
    res.redirect(
        `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      res.status(400).json({
        success: false,
      });
    }
  };
