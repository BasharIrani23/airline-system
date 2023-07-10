"use strict";

const { eventPool } = require("./events");
const { faker } = require("@faker-js/faker");
const uuid = require("uuid");
require("./pilot");

eventPool.on("new-flight", handleNewFlight);

function handleNewFlight(payload) {
    console.log(
        `Manager: New flight with ID ${payload.Details.flightID} has been scheduled`
    );
}

setInterval(() => {
    eventPool.emit("new-flight", {
        event: "new-flight",
        time: new Date(),
        Details: {
            airLine: "Turkish Airlines",
            flightID: uuid.v4(),
            pilot: faker.person.fullName(),
            destination: faker.location.city(),
        },
    });
}, 10000);

setTimeout(() => {
    eventPool.on("Arrived", (payload) => {
        console.log(
            `Manager: We're greatly thankful for the amazing flight, ${payload.Details.pilot}`
        );
    });
}, 1);
