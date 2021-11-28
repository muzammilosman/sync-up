const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const venueSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    region_id: {
        type: String,
        required: true,
        default: '1'
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
venueSchema.plugin(toJSON);
venueSchema.plugin(paginate);

venueSchema.statics.isVenueExist = async function (venueId) {
  const venue = await this.findOne({ _id: venueId });
  return !!venue;
};

venueSchema.pre('save', async function (next) {
  const venue = this;
  console.log("Pre save:",venue);
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
  Venue
  next();
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
