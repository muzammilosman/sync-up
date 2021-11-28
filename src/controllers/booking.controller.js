const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { bookingService } = require('../services');


const createBooking = catchAsync(async (req, res) => {
    const venue = await bookingService.createBooking(req.body);
    res.status(httpStatus.CREATED).send(venue);
});

const getBookings = catchAsync(async (req, res) => {
    const result = await bookingService.getBookings();
    res.send(result);
})

module.exports = {
    createBooking,
    getBookings
}