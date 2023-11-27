const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bookingSchema = require('../schemas/bookingSchema');

const Booking = new mongoose.model("Booking" , bookingSchema);

// const User = new mongoose.model("User", userSchema);

router.get('/', async(req, res) => {
    try {
        const bookings = await Booking.find({});
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'There was a server side error!'
        });
    }
});

router.get('/:email', async (req, res) => {
    try {
        const { email } = req.params; // Extract email from URL parameter
        const bookingsByEmail = await Booking.find({ email }); // Find bookings by email
        res.status(200).json(bookingsByEmail);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'There was a server side error!'
        });
    }
});


// router.post('/', async (req, res) => {
//     try {
//         const bookings = await Booking.save();
//         res.status(200).json(bookings);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             error: 'There was a server side error!'
//         });
//     }
// });
router.post('/', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(200).json({
            message: "Booked successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "There was a server side error!"
        });
    }
});



router.put('/:id', async(req, res)=>{

});

router.delete('/:id', async(req, res) => {

});

module.exports = router;
