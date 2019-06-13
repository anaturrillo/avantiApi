"use strict";
exports.__esModule = true;
var progress_services_1 = require("./progress.services");
exports.findProgresssController = function (req) { return progress_services_1.findProgresss(req.query); };
exports.findProgressByIdController = function (req) { return progress_services_1.findProgressById(req.params.userId); };
exports.createProgressController = function (req) { return progress_services_1.createProgress(req.body); };
exports.editProgressController = function (req) { return progress_services_1.editProgress(req.params.userId, req.body); };
exports.removeProgressController = function (req) { return progress_services_1.removeProgress(req.params.userId); };
