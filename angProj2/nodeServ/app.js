
const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const app = express();
const Port = 3000;
const bodyParser = require("body-parser");
const { stringify } = require("querystring");
const urlencondedParcer = express.urlencoded({ extended: false });
app.listen(Port, (error) => {
  error ? console.log(error) : console.log(`listening port ${Port}`);
});
// import { db } from "./bd";
const db = [
    {
        name: 'Sensor 1',
        model: 'PC1212',
        type: 'Pressure',
        range: '0-16',
        unit: 'bar',
        location: 'Room1'
    },
    {
        name: 'Sensor 2',
        model: 'EH-567',
        type: 'Voltage',
        range: '-25-25',
        unit: 'voltage',
        location: 'Room1'
    },
    {
        name: 'Sensor 3',
        model: 'TER-21',
        type: 'Temperature',
        range: '-70-50',
        unit: '*C',
        location: 'Room2'
    },
    {
        name: 'Sensor 4',
        model: 'H94', 
        type: 'Humidity',
        range: '0-100%',
        unit: '%',
        location: 'Room3' 
    },
    {
        name: 'Sensor 5',
        model: 'PC1212',
        type: 'Pressure',
        range: '0-16',
        unit: 'bar',
        location: 'Room1'
    },
    {
        name: 'Sensor 6',
        model: 'EH-567',
        type: 'Voltage',
        range: '-25-25',
        unit: 'voltage',
        location: 'Room1'
    },
    {
        name: 'Sensor 7',
        model: 'TER-21',
        type: 'Temperature',
        range: '-70-50',
        unit: '*C',
        location: 'Room2'
    },
    {
        name: 'Sensor 8',
        model: 'H94', 
        type: 'Humidity',
        range: '0-100%',
        unit: '%',
        location: 'Room3' 
    },{
        name: 'Sensor 9',
        model: 'PC1212',
        type: 'Pressure',
        range: '0-16',
        unit: 'bar',
        location: 'Room1'
    },
    {
        name: 'Sensor 10',
        model: 'EH-567',
        type: 'Voltage',
        range: '-25-25',
        unit: 'voltage',
        location: 'Room1'
    },
    {
        name: 'Sensor 11',
        model: 'TER-21',
        type: 'Temperature',
        range: '-70-50',
        unit: '*C',
        location: 'Room2'
    },
    {
        name: 'Sensor 12',
        model: 'H94', 
        type: 'Humidity',
        range: '0-100%',
        unit: '%',
        location: 'Room3' 
    },
]
app.get('/getinfo', (req,res)=>{
    res.send(JSON.stringify(db))
})