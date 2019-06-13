"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routes_1 = require("./app/api/routes");
var config_1 = require("./app/utils/config");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var connectionString = "mongodb+srv://avanti:" + config_1["default"].dbPassword + "@cluster0-8v2vi.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(function () {
    app.use('/api', routes_1["default"]());
})["catch"](console.log);
app.listen(config_1["default"].port, function () {
    console.log("Server listening on port " + config_1["default"].port);
});
