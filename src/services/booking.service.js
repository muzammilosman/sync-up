const httpStatus = require('http-status');
const { Booking, Venue, User } = require('../models');
const ApiError = require('../utils/ApiError');

const createBooking = async (bookingBody) => {
    const venueExist = await Venue.isVenueExist(bookingBody.venue_id)
    if(!venueExist){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Venue not found');
    }
    return Booking.create(bookingBody);
}

const getBookings = () => {
    return Booking.find();
}

const initiatePayment = (bookingId) => {
    // return Booking.updateOne({
    //     _id: bookingId
    // }, {
    //     $set: {
    //         paymentRequestsSent: true
    //     }
    // });

    return Booking.findByIdAndUpdate(bookingId, {
        $set: {
            paymentRequestsSent: true
        }
    }, { lean: true});
}

module.exports = {
    createBooking,
    getBookings,
    initiatePayment
}