# `SYNC_QUEUE`

# A NodeJS based module to implement group booking and integrate payment splitting

The application is built on top of [node boilerplate](https://github.com/hagopj13/node-express-boilerplate.git) which has an extensive documentation on the codebase. 
This has been meant to be a module which can be integrated with projects which have the motive to bring in split booking or split payment feature.

# Benefits

There are instances when a booking is made in an application by a single person. Generally, the amount is pooled in to make the booking or the person who has booked may 
need to request the payment from his peers offline. This is highly time consuming and may end up cumbersome. This module makes sure the bookings are split and payment requests
are sent (with the help of a third party payment integration APIs like paypal, Google Pay, RazorPay etc..) to the people participating in the event. This takes the load of a
single person making the complete payment and enables equal participation in the booking.


# Models

- `venues` 
- `booking`
- `payment-req`

