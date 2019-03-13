// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************


// Dependencies
// =============================================================
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var mongojs = require("mongojs");

// Requiring the `User` model for accessing the `users` collection
var Entry = require("./app/models/userModel.js");

var databaseUrl = "userdb";
var collections = ["entries"];
var db = mongojs(databaseUrl, collections);



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/userdb", { useNewUrlParser: true });
var jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
//require("app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes")(app);
//dependencies app entry db need to work
require("./app/routes/api-routes")(app, Entry, db);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
