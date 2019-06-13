"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controller_1 = require("../controller");
var motivation_controllers_1 = require("./motivation.controllers");
var router = express_1.Router();
router.get('/', controller_1.respond(motivation_controllers_1.findMotivationsController));
router.get('/:motivationId', controller_1.respond(motivation_controllers_1.findMotivationByIdController));
router.post('/', controller_1.respond(motivation_controllers_1.createMotivationController));
router.put('/:motivationId', controller_1.respond(motivation_controllers_1.editMotivationController));
router["delete"]('/:motivationId', controller_1.respond(motivation_controllers_1.removeMotivationController));
exports["default"] = router;