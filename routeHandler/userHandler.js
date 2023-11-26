const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');

const User = new mongoose.model("User", userSchema);

router.get('/', async(req, res) => {
    try {
        const users = await User.find(); // Retrieve all users using Mongoose's find() method
    
        // If no users are found, return an empty array
        if (!users || users.length === 0) {
          return res.status(404).json({ message: 'No users found' });
        }
    
        // If users are found, send the user data in the response
        res.status(200).json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

router.get('/:id', async(req, res) => {

});

router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({
            message: "User was added successfully"
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
