const httpStatus = require('http-status');
const { Venue } = require('../models');
const ApiError = require('../utils/ApiError');

const createVenue = (venueBody) => {
    return Venue.create(venueBody);
}

const getAllVenues = () => {
    return Venue.find();
}

module.exports = {
    createVenue,
    getAllVenues
}