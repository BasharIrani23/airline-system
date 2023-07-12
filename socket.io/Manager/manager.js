"use strict";

require("dotenv").config();
const port = process.env.PORT || 3000;

const ioClient = require("socket.io-client");
const host = `http://localhost:${port}`;
const socket = ioClient.connect(host);

socket.on("new-flight", handelNewFlight);

function handelNewFlight(payload) {
    console.log(
        `Manager: new flight with ID ${payload.Details.flightID} have been scheduled`
    );
}

setTimeout(() => {
    socket.on("Arrived", (payload) => {
        console.log(
            `Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`
        );
    });
}, 1);
