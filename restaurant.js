//// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

var reservations = require("./data/reservations.js");
var waitlist = require("./data/waitlist.js");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing for HTML
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/html/home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "/html/reserve.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "/html/table.html"));
});

// API Routing
app.get("/data/reservations.js", function(req, res) {
  res.json(reservations);
});

app.get("/data/waitlist.js", function(req, res) {
  res.json(waitlist);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Hello, App listening on PORT " + PORT + "\nLink: localhost:" + PORT);
});