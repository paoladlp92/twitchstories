// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
// Create an instance of the express app.
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "byzorcabr9",
    database: "movie_planner_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

// Data
var entries = [
  { story: "Once upon a time" },
  { story: "There was a magical dog." } //name
];

// Routes
app.get("/entries/:story", function(req, res) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].story === req.params.story) {
      return res.render("entries", entries[i]);
    }
  }
});

app.get("/entries", function(req, res) {
  res.render("ics", { ics: entries });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
