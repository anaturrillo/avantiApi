"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var schema_1 = require("../schema");
var User = mongoose.model('User', schema_1.userSchema);
exports.User = User;
var Progress = mongoose.model('Progress', schema_1.progressSchema);
exports.Progress = Progress;
var Routine = mongoose.model('Routine', schema_1.routineSchema);
exports.Routine = Routine;
var Exercise = mongoose.model('Exercise', schema_1.exerciseSchema);
exports.Exercise = Exercise;
var Motivation = mongoose.model('Motivation', schema_1.motivationSchema);
exports.Motivation = Motivation;
