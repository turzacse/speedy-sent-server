const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    parcelType: {
        type: String,
        required: true
    },
    parcelWeight: {
        type: Number,
        required: true
    },
    receiverName: {
        type: String,
        required: true
    },
    receiverPhoneNumber: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    requestedDeliveryDate: {
        type: Date,
        required: true
    },
    deliveryAddressLatitude: {
        type: Number,
        required: true
    },
    deliveryAddressLongitude: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bookinStatus: {
        type: String,
        default: 'pending'
    },
    approximateDeliveryDate: {
        type: Date,
        default: null
    },
    bookingDate: {
        type: Date,
        default: Date.now // Auto-generated date when booking is created
    },
    deliveryMenId: {
        type: mongoose.Schema.Types.ObjectId, // Assuming Delivery Men ID is stored as ObjectId
        default: null // Initially set to null and updated when assigned
    }
});


module.exports = bookingSchema;
