const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const paymentReqSchema = mongoose.Schema(
  {
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
      amount: {
          type: Number,
          required: true
      },
      status: {
        type: Number,
        enum: [0, 1],
        default: 0
      }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
paymentReqSchema.plugin(toJSON);
paymentReqSchema.plugin(paginate);


const PaymentRequest = mongoose.model('PaymentRequest', paymentReqSchema);

module.exports = PaymentRequest;
