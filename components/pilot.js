"use strict";

const { eventPool } = require("./events");
require("./manager");

eventPool.on("new-flight", NewFlight);

function NewFlight(payload) {
    setTimeout(() => {
        console.log(
            `Pilot: Flight with ID ${payload.Details.flightID} took off.`
        );
        payload.event = "took-off";
        payload.time = new Date();
        eventPool.emit("took-off", payload);
    }, 4000);

    setTimeout(() => {
        console.log(
            `Pilot: Flight with ID ${payload.Details.flightID} has arrived.`
        );
        payload.event = "Arrived";
        payload.time = new Date();
        eventPool.emit("Arrived", payload);
    }, 7000);
}
