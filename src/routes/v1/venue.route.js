const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const venueController = require('../../controllers/venue.controller');

const router = express.Router();

router.route('/')
    .post(auth('getVenues'), venueController.createVenue)
    .get(auth('getVenues'), venueController.getVenues);

module.exports = router;