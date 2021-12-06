const httpStatus = require('http-status');
const { PaymentRequest } = require('../models');
const ApiError = require('../utils/ApiError');

const generatePaymentRequests = async (booking) => {
    const paymentRequests = booking.attendees.map((user) => {
        return {
            user_id: user.user_id,
            booking_id: booking._id,
            amount: booking.amount,
            status: 0
        }
    });
    return PaymentRequest.insertMany(paymentRequests);
}

const getPayRequests = async (bookingId) => {
    const paymentRequests = await PaymentRequest.find({
        booking_id: bookingId
    });
    return paymentRequests
}

module.exports = {
    generatePaymentRequests,
    getPayRequests
}