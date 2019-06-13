"use strict";
exports.__esModule = true;
var model_1 = require("../../model");
var types_1 = require("../types");
var errors_1 = require("../../utils/errors");
exports.createExerciseClient = function (item) {
    var newExercise = new model_1.Exercise(item);
    return newExercise.save()
        .then(function (_) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(item);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Exercise', sentData);
        throw new errors_1.InvalidArgumentError('Exercise', sentData);
    });
};
exports.findExerciseByIdClient = function (exerciseId) { return model_1.Exercise
    .findById(exerciseId)
    .exec()["catch"](function (e) {
    throw new errors_1.InternalError('Exercises');
}); };
exports.findExercisesClient = function (field, value) {
    var _a;
    return model_1.Exercise
        .find((_a = {}, _a[field] = value, _a))
        .exec()["catch"](function (e) {
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Exercise query', field + ":" + value);
        throw new errors_1.InternalError('Exercise');
    });
};
exports.editExerciseClient = function (exerciseId, exercise) {
    return model_1.Exercise
        .replaceOne({ _id: exerciseId }, exercise)
        .exec()
        .then(function (data) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(exercise);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Exercise', sentData);
        throw new errors_1.InvalidArgumentError('Exercise', sentData);
    });
};
exports.removeExerciseClient = function (exerciseId) { return model_1.Exercise
    .findOneAndRemove({ _id: exerciseId })
    .exec()
    .then(function (_) { return types_1.Codes.OK; }); };
