"use strict";
exports.__esModule = true;
var user_services_1 = require("./user.services");
exports.findUsersController = function (req) { return user_services_1.findUsers(req.query); };
exports.findUserByIdController = function (req) { return user_services_1.findUserById(req.params.userId); };
exports.createUserController = function (req) { return user_services_1.createUser(req.body); };
exports.editUserController = function (req) { return user_services_1.editUser(req.params.userId, req.body); };
exports.removeUserController = function (req) { return user_services_1.removeUser(req.params.userId); };
