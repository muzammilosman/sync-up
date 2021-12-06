const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const bookingController = require('../../controllers/booking.controller');

const router = express.Router();

router.route('/')
    .post(auth('manageBookings'), bookingController.createBooking)
    .get(auth('getBookings'), bookingController.getBookings);

router.route('/payment-req/:id')
    .post(auth('getBookings'), bookingController.sendPaymentReq)
    .get(auth('getBookings'), bookingController.getPaymentRequests);

module.exports = router;