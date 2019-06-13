"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var types_1 = require("../api/types");
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(msg, code) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        return _this;
    }
    return AppError;
}(Error));
exports.AppError = AppError;
var InvalidArgumentError = /** @class */ (function (_super) {
    __extends(InvalidArgumentError, _super);
    function InvalidArgumentError(argument, value) {
        return _super.call(this, argument + " is missing or badly formatted. Recieved: " + value, types_1.ErrorCode.BAD_FORMAT) || this;
    }
    return InvalidArgumentError;
}(AppError));
exports.InvalidArgumentError = InvalidArgumentError;
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(entity, prop, value) {
        return _super.call(this, "There are no " + entity + " whith " + prop + " = " + value, types_1.ErrorCode.NOT_FOUND) || this;
    }
    return NotFoundError;
}(AppError));
exports.NotFoundError = NotFoundError;
var InternalError = /** @class */ (function (_super) {
    __extends(InternalError, _super);
    function InternalError(entity) {
        return _super.call(this, "There has been an error with " + entity, types_1.ErrorCode.INTERNAL_ERROR) || this;
    }
    return InternalError;
}(AppError));
exports.InternalError = InternalError;
