"use strict";
exports.__esModule = true;
var motivation_services_1 = require("./motivation.services");
exports.findMotivationsController = function (req) { return motivation_services_1.findMotivations(req.query); };
exports.findMotivationByIdController = function (req) { return motivation_services_1.findMotivationById(req.params.userId); };
exports.createMotivationController = function (req) { return motivation_services_1.createMotivation(req.body); };
exports.editMotivationController = function (req) { return motivation_services_1.editMotivation(req.params.userId, req.body); };
exports.removeMotivationController = function (req) { return motivation_services_1.removeMotivation(req.params.userId); };
