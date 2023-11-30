const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require("express");
const {LOCAL_CLIENT, CLIENT} = require("../config/env");

const applyMiddleware = (app) => {
    app.use(cors({
        origin: [
            LOCAL_CLIENT,
            CLIENT,
            'http://localhost:5173'
        ],
        credentials: true
    }));
    app.use(cookieParser());
}

module.exports = applyMiddleware;