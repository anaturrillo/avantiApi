"use strict";
exports.__esModule = true;
var routine_services_1 = require("./routine.services");
exports.findRoutinesController = function (req) {
    return routine_services_1.findRoutines(req.query);
};
exports.findRoutineByIdController = function (req) {
    return routine_services_1.findRoutineById(req.params.userId);
};
exports.createRoutineController = function (req) {
    return routine_services_1.createRoutine(req.body);
};
exports.editRoutineController = function (req) {
    return routine_services_1.editRoutine(req.params.userId, req.body);
};
exports.removeRoutineController = function (req) {
    return routine_services_1.removeRoutine(req.params.userId);
};
exports.addExerciseController = function (req) {
    return routine_services_1.addExercise(req.params.routineId, req.body);
};
exports.getExercisesConstroller = function (req) {
    return routine_services_1.getExercises(req.params.routineId);
};
