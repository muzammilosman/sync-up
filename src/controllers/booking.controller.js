const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { bookingService, paymentReqService } = require('../services');


const createBooking = catchAsync(async (req, res) => {
    const venue = await bookingService.createBooking(req.body);
    res.status(httpStatus.CREATED).send(venue);
});

const getBookings = catchAsync(async (req, res) => {
    const result = await bookingService.getBookings();
    res.send(result);
});

const sendPaymentReq = catchAsync(async (req, res) => {
    const booking = await bookingService.initiatePayment(req.params.id);
    if(!booking){
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
    }
    const paymentReq = await paymentReqService.generatePaymentRequests(booking);
    res.status(httpStatus.CREATED).send(paymentReq);
});

const getPaymentRequests = catchAsync(async (req, res) => {
    const result = await paymentReqService.getPayRequests(req.params.id);
    res.send(result);
});

module.exports = {
    createBooking,
    getBookings,
    sendPaymentReq,
    getPaymentRequests
}