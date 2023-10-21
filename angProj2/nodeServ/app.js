const express = require("express");
const app = express();
const Port = 3000;
const bodyParser = require("body-parser");
const urlencondedParcer = express.urlencoded({extended: false});
const jsonParcer = express.json;
const cors = require('cors')
// app.use(express.json())
// app.use(express.urlencondedParcer({extended: false}))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use(cors())
app.listen(Port, (error) => {
  error ? console.log(error) : console.log(`listening port ${Port}`);
});
let db = [
  {
    name: "Sensor 1",
    model: "PC1212",
    type: "Pressure",
    range: "0-16",
    unit: "bar",
    location: "Room1",
  },
  {
    name: "Sensor 2",
    model: "EH-567",
    type: "Voltage",
    range: "-25-25",
    unit: "voltage",
    location: "Room1",
  },
  {
    name: "Sensor 3",
    model: "TER-21",
    type: "Temperature",
    range: "-70-50",
    unit: "*C",
    location: "Room2",
  },
  {
    name: "Sensor 4",
    model: "H94",
    type: "Humidity",
    range: "0-100%",
    unit: "%",
    location: "Room3",
  },
  {
    name: "Sensor 5",
    model: "PC1212",
    type: "Pressure",
    range: "0-16",
    unit: "bar",
    location: "Room1",
  },
  {
    name: "Sensor 6",
    model: "EH-567",
    type: "Voltage",
    range: "-25-25",
    unit: "voltage",
    location: "Room1",
  },
  {
    name: "Sensor 7",
    model: "TER-21",
    type: "Temperature",
    range: "-70-50",
    unit: "*C",
    location: "Room2",
  },
  {
    name: "Sensor 8",
    model: "H94",
    type: "Humidity",
    range: "0-100%",
    unit: "%",
    location: "Room3",
  },
  {
    name: "Sensor 9",
    model: "PC1212",
    type: "Pressure",
    range: "0-16",
    unit: "bar",
    location: "Room1",
  },
  {
    name: "Sensor 10",
    model: "EH-567",
    type: "Voltage",
    range: "-25-25",
    unit: "voltage",
    location: "Room1",
  },
  {
    name: "Sensor 11",
    model: "TER-21",
    type: "Temperature",
    range: "-70-50",
    unit: "*C",
    location: "Room2",
  },
  {
    name: "Sensor 12",
    model: "H94",
    type: "Humidity",
    range: "0-100%",
    unit: "%",
    location: "Room3",
  },
];
const users = [
  {
      login: 'user',
      password: 'password',
      abilities: 'limited'
  },
  {
      login: 'admin',
      password: 'sudoAdmin',
      abilities: 'full'
  },
  {
    login: 'default',
    password: 'none',
    abilities: 'none'
  }
]
app.get("/getInfo", (req,res)=>{
  
  let massQ = [];
  let min = req.headers.min;
  let max = req.headers.max;
  for(let i = min; i<max;i++){
    massQ.push(db[i])
  }
      res.send(massQ)
})
app.post("/postinfo",jsonParcer, (req, res) => {
  console.log('aba')
  if(!req.body.min) return (res.sendStatus(400))
  console.log(req.body.min)
  let massQ = []
  let min = req.body.min;
  let max = req.body.max;
  for(let i = min; i<max;i++){
    massQ.push(db[i])
  }
      res.send(massQ)
});
app.post('/login', jsonParcer(), (req,res)=>{
  for (let i =0; i < users.length; i++){
    if((req.body.login == users[i].login)&&(req.body.password == users[i].password)){
      console.log('auth complete')
      res.send(users[i])
    }
    if(i == 2){
      console.log('auth error')
      res.send(users[2])
    }
  }
})
app.post('/save', jsonParcer(), (req, res)=>{
  console.log(req.body)
  db.push(req.body)
  console.log(db)
  res.end();
})

