const Joi = require('joi');

const createVenue = {
    body: Joi.object().keys({
        name: Joi.string().required().min(2),
        address: Joi.string().required().min(5),
        region_id: Joi.string().required(),
    }),
};

module.exports = {
    createVenue
}