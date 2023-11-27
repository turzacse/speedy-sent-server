const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const userHandler = require("./routeHandler/userHandler");
const bookingHandler = require("./routeHandler/bookingHandler");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bnzewy6.mongodb.net/SpeedySend`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( ()=> console.log("Connection is Ok"))
.catch((err)=> console.log(err));


//handler 
app.use('/users', userHandler);
app.use('/booking', bookingHandler);

app.get('/', (req, res) =>{
    res.send('Server is running');
})

app.listen(port , () =>{
    console.log(`server is running on port ${port}`);
})
