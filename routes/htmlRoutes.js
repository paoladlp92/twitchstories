var db = require("../models");

module.exports = function (app) {
  
  app.get("/", function (req, res) {
    res.render("Write", {});
  });

  app.get("/Read", function (req, res) {
    res.render("Read", {});
  });


  app.get("/About", function (req, res) {
    res.render("About", {});
  });


  app.get("*", function (req, res) {
    res.render("404");
  });
};
