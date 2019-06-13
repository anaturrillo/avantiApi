"use strict";
exports.__esModule = true;
var exercise_services_1 = require("./exercise.services");
exports.findExercisesController = function (req) { return exercise_services_1.findExercises(req.query); };
exports.findExerciseByIdController = function (req) { return exercise_services_1.findExerciseById(req.params.exerciseId); };
exports.createExerciseController = function (req) { return exercise_services_1.createExercise(req.body); };
exports.editExerciseController = function (req) { return exercise_services_1.editExercise(req.params.exerciseId, req.body); };
exports.removeExerciseController = function (req) { return exercise_services_1.removeExercise(req.params.exerciseId); };
