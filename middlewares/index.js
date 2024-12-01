const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require("express");
const {LOCAL_CLIENT, CLIENT} = require("../config/env");

const applyMiddleware = (app) => {
    app.use(cors({
        origin: [
            LOCAL_CLIENT,
            CLIENT,
            'http://localhost:5173',
            'https://speedy-send-12d87.web.app',
            'https://speedy-981eb.web.app'
        ],
        credentials: true
    }));
    app.use(cookieParser());
}

module.exports = applyMiddleware;