"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_router_1 = require("./user/user.router");
var routine_router_1 = require("./routine/routine.router");
var progress_router_1 = require("./progress/progress.router");
var motivation_router_1 = require("./motivation/motivation.router");
var exercise_router_1 = require("./exercise/exercise.router");
var routes = function () {
    var router = express_1.Router();
    router.use('/user', user_router_1["default"]);
    router.use('/exercise', exercise_router_1["default"]);
    router.use('/routine', routine_router_1["default"]);
    router.use('/progress', progress_router_1["default"]);
    router.use('/motivation', motivation_router_1["default"]);
    return router;
};
exports["default"] = routes;
