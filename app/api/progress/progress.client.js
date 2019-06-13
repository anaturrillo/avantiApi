"use strict";
exports.__esModule = true;
var model_1 = require("../../model");
var types_1 = require("../types");
var errors_1 = require("../../utils/errors");
exports.createProgressClient = function (item) {
    var newProgress = new model_1.Progress(item);
    return newProgress.save()
        .then(function (_) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(item);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Progress', sentData);
        throw new errors_1.InvalidArgumentError('Progress', sentData);
    });
};
exports.findProgressByIdClient = function (progressId) { return model_1.Progress
    .findById(progressId)
    .exec()["catch"](function (e) {
    throw new errors_1.InternalError('Progresss');
}); };
exports.findProgresssClient = function (field, value) {
    var _a;
    return model_1.Progress
        .find((_a = {}, _a[field] = value, _a))
        .exec()["catch"](function (e) {
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Progress query', field + ":" + value);
        throw new errors_1.InternalError('Progress');
    });
};
exports.editProgressClient = function (progressId, progress) {
    return model_1.Progress
        .replaceOne({ _id: progressId }, progress)
        .exec()
        .then(function (data) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(progress);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Progress', sentData);
        throw new errors_1.InvalidArgumentError('Progress', sentData);
    });
};
exports.removeProgressClient = function (progressId) { return model_1.Progress
    .findOneAndRemove({ _id: progressId })
    .exec()
    .then(function (_) { return types_1.Codes.OK; }); };
