"use strict";

const port = process.env.PORT || 3000;

const ioClient = require("socket.io-client");
const subHost = `http://localhost:${port}/airline`;
const socket = ioClient.connect(subHost);

const host = `http://localhost:${port}`;
const mainSocket = ioClient.connect(host);

mainSocket.on("new-flight", NewFlight);

function NewFlight(payload) {
    setTimeout(() => {
        console.log(
            `Pilot: flight with ID ${payload.Details.flightID} took-off`
        );
        payload.event = "took-off";
        payload.time = new Date();
        socket.emit("took-off", payload);
    }, 4000);

    setTimeout(() => {
        console.log(
            `Pilot: flight with ID ${payload.Details.flightID} has Arrived`
        );
        payload.event = "Arrived";
        payload.time = new Date();
        mainSocket.emit("Arrived", payload);
    }, 7000);
}
