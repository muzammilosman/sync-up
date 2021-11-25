const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { venueService } = require('../services');


const createVenue = catchAsync(async (req, res) => {
    const venue = await venueService.createVenue(req.body);
    res.status(httpStatus.CREATED).send(venue);
});

const getVenues = catchAsync(async (req, res) => {
    const result = await venueService.getAllVenues();
    res.send(result);
})

module.exports = {
    createVenue,
    getVenues
}