const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const venueValidation = require('../../validations/venue.validation');
const venueController = require('../../controllers/venue.controller');

const router = express.Router();

router.route('/')
    .post(auth('getVenues'), validate(venueValidation.createVenue),  venueController.createVenue)
    .get(auth('getVenues'), venueController.getVenues);

module.exports = router;