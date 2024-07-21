const express = require('express');
const { checkout, PaymentVerification } = require('../controllers/paymentcontrol.js'); // Adjust the import to match your controller's export
const router = express.Router();

// Define your payment routes here
router.post('/checkout', checkout);
router.post('/verification',PaymentVerification);

module.exports = router;