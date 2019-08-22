//// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing for HTML
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/html/home.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Hello, App listening on PORT " + PORT + "\n Link: localhost:" + PORT);
});