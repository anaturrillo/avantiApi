"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var model_1 = require("../../model");
var types_1 = require("../types");
var errors_1 = require("../../utils/errors");
exports.findUsersClient = function (field, value) {
    var _a;
    return model_1.User
        .find((_a = {}, _a[field] = value, _a))
        .exec()["catch"](function (e) {
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('User query', field + ":" + value);
        throw new errors_1.InternalError('User');
    });
};
exports.findUserByIdClient = function (userId) { return model_1.User
    .findById(userId)
    .exec()["catch"](function (e) {
    throw new errors_1.InternalError('Users');
}); };
exports.createUserClient = function (userData) {
    var newUser = new model_1.User(__assign({}, userData, { _id: userData.username }));
    return newUser.save()
        .then(function (_) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(userData);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('User', sentData);
        throw new errors_1.InvalidArgumentError('User', sentData);
    });
};
exports.editUserClient = function (userId, user) {
    return model_1.User
        .replaceOne({ _id: userId }, user)
        .exec()
        .then(function (data) { return types_1.Codes.OK; })["catch"](function (e) {
        var sentData = JSON.stringify(user);
        if (e.name === 'ValidationError')
            throw new errors_1.InvalidArgumentError('User', sentData);
        throw new errors_1.InvalidArgumentError('User', sentData);
    });
};
exports.removeUserClient = function (userId) {
    return model_1.User
        .findOneAndRemove({ _id: userId })
        .exec()
        .then(function (_) { return types_1.Codes.OK; });
};
