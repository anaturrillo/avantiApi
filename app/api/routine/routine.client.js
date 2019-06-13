"use strict";
exports.__esModule = true;
var model_1 = require("../../model");
var types_1 = require("../types");
var errors_1 = require("../../utils/errors");
exports.createRoutineClient = function (item) {
    var newRoutine = new model_1.Routine(item);
    return newRoutine.save()
        .then(function (_) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(item);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Routine', sentData);
        throw new errors_1.InvalidArgumentError('Routine', sentData);
    });
};
exports.findRoutineByIdClient = function (routineId) { return model_1.Routine
    .findById(routineId)
    .exec()["catch"](function (e) {
    throw new errors_1.InternalError('Routines');
}); };
exports.findRoutinesClient = function (field, value) {
    var _a;
    return model_1.Routine
        .find((_a = {}, _a[field] = value, _a))
        .exec()["catch"](function (e) {
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Routine query', field + ":" + value);
        throw new errors_1.InternalError('Routine');
    });
};
exports.editRoutineClient = function (routineId, routine) {
    return model_1.Routine
        .replaceOne({ _id: routineId }, routine)
        .exec()
        .then(function (data) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(routine);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Routine', sentData);
        throw new errors_1.InvalidArgumentError('Routine', sentData);
    });
};
exports.removeRoutineClient = function (routineId) { return model_1.Routine
    .findOneAndRemove({ _id: routineId })
    .exec()
    .then(function (_) { return types_1.Codes.OK; }); };
exports.addExerciseClient = function (routineId, exercise) {
    return model_1.Routine.findById(routineId).update({ $push: { exercises: exercise } }).then(function (e) { return types_1.Codes.OK; });
};
