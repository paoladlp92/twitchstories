

// var express = require("express");
// var logger = require("morgan");


//which app is this anyways?



// Configure middleware
module.exports = function (app, Entry, db) {
  // Use morgan logger for logging requests
  // app.use(logger("dev"));
  // // Parse request body as JSON
  // app.use(express.urlencoded({ extended: true }));
  // app.use(express.json());
  // // Make public a static folder
  // app.use(express.static("public"));

  
  // Routes
  app.get("/", function (req, res) {
    // Create a new user using req.body
    console.log(dbUser);
  });

  // Route to post our form submission to mongoDB via mongoose

  app.post("/submit", function (req, res) {
    // Create a new user using req.body
    console.log(req.body)
    Entry.create(req.body)
      //se puede llamar como sea, lo q se llamo en base de datos
      .then(function (dbEntry) {
        //display
        //res.json(dbEntry)
        console.log("all good" + dbEntry);
        location.reload();
      })
      .catch(function (err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });

  app.get("/submit2", function (req, res) {
    // Query: In our database, go to the animals collection, then "find" everything
    db.entries.find({}, function (err, found) {
      // Log any errors if the server encounters one
      if (err) {
        console.log(err);
      }
      // Otherwise, send the result of this query to the browser
      else {
        res.json(found.map(entries => {
          return { id: entries._id, entry: entries.entry };
        }));
        //location.reload();
      }
    });
  });

  app.get("/entries", function (req, res) {
    Entry.find({}, function (err, entries) {
      if (err) throw err;
      console.log("getting entries");
      res.json(entries);
    });
  })
}

