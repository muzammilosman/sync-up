const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { userSchema } = require('./user.model')

const bookingSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    venue_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Venue',
      required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    attendees: [userSchema],
    split_booking: {
        type: Boolean,
        required: true,
        default: true
    },
    booking_status: {
        type: Number,
        enum: [1,2,3],
        default: 1
    },
    payment_status: {
        type: Number,
        enum: [1, 2, 3],
        default: 1
    },
    payments: [paymentSchema]
  },
  {
    timestamps: true,
  }
);


const paymentSchema = mongoose.Schema({
    booking_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    payment_method: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

// add plugin that converts mongoose to json
bookingSchema.plugin(toJSON);
bookingSchema.plugin(paginate);

bookingSchema.statics.isVenueExist = async function (venueId) {
  const venue = await this.findOne({ _id: { $ne: venueId } });
  return !!venue;
};

bookingSchema.pre('save', async function (next) {
  const booking = this;
  console.log("Pre save:",booking);
  next();
});

const Booking = mongoose.model('Venue', bookingSchema);
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Booking;
