const express = require("express");

const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];
app.post("/events", (req, res, next) => {
  const event = req.body;
  events.push(event);
  console.log(event);
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log("4000 does not respond");
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log("4001 does not respond");
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log("4002 does not respond");
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log("4003 does not respond");
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
