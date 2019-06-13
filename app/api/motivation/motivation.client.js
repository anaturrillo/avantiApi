"use strict";
exports.__esModule = true;
var model_1 = require("../../model");
var types_1 = require("../types");
var errors_1 = require("../../utils/errors");
exports.createMotivationClient = function (item) {
    var newMotivation = new model_1.Motivation(item);
    return newMotivation.save()
        .then(function (_) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(item);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Motivation', sentData);
        throw new errors_1.InvalidArgumentError('Motivation', sentData);
    });
};
exports.findMotivationByIdClient = function (motivationId) { return model_1.Motivation
    .findById(motivationId)
    .exec()["catch"](function (e) {
    throw new errors_1.InternalError('Motivations');
}); };
exports.findMotivationsClient = function (field, value) {
    var _a;
    return model_1.Motivation
        .find((_a = {}, _a[field] = value, _a))
        .exec()["catch"](function (e) {
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Motivation query', field + ":" + value);
        throw new errors_1.InternalError('Motivation');
    });
};
exports.editMotivationClient = function (motivationId, motivation) {
    return model_1.Motivation
        .replaceOne({ _id: motivationId }, motivation)
        .exec()
        .then(function (data) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(motivation);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('Motivation', sentData);
        throw new errors_1.InvalidArgumentError('Motivation', sentData);
    });
};
exports.removeMotivationClient = function (motivationId) { return model_1.Motivation
    .findOneAndRemove({ _id: motivationId })
    .exec()
    .then(function (_) { return types_1.Codes.OK; }); };
