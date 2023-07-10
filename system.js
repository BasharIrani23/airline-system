"use strict";

const Manager = require("./components/manager");
const Pilot = require("./components/pilot");
const { eventPool } = require("./components/events");

eventPool.on("new-flight", newFlight);
eventPool.on("took-off", flightTookOff);
eventPool.on("Arrived", flightArrived);

function newFlight(payload) {
    console.log("Flight:", payload);
}

function flightTookOff(payload) {
    console.log("Flight:", payload);
}

function flightArrived(payload) {
    console.log("Flight:", payload);
}
