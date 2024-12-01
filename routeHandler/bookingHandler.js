const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bookingSchema = require('../schemas/bookingSchema');
const verifyToken = require("../middlewares/verifyToken")
const Booking = new mongoose.model("Booking" , bookingSchema);

// const User = new mongoose.model("User", userSchema);

router.get('/',  async(req, res) => {
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

router.get('/:email', verifyToken, async (req, res) => {
    try {
        const { email } = req.params; 
        const bookingsByEmail = await Booking.find({ email }); 
        res.status(200).json(bookingsByEmail);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'There was a server side error!'
        });
    }
});


router.post('/', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(200).json({
            message: "Bookednodemon successfully"
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


router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);

    try {
        const booking = await Booking.findById(id); 

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        
        booking.bookingStatus = req.body.bookingStatus || booking.bookingStatus;
        booking.deliveryMenId = req.body.deliveryMenId || booking.deliveryMenId;
        booking.approximateDeliveryDate = req.body.approximateDeliveryDate || booking.approximateDeliveryDate;

        const updatedBooking = await booking.save(); 

        res.status(200).json(updatedBooking);
        console.log('okkkkk');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.patch('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        const { bookingStatus } = req.body;

        if (!bookingStatus || (bookingStatus !== 'Cancelled' && bookingStatus !== 'Delivered')) {
            return res.status(400).json({ message: 'Invalid booking status' });
        }

        booking.bookingStatus = bookingStatus;
        const updatedBooking = await booking.save();

        res.status(200).json(updatedBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBooking = await Booking.findByIdAndDelete(id);

        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
