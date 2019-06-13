"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var errors_1 = require("../../utils/errors");
var exercise_client_1 = require("./exercise.client");
exports.findExercises = function (query) { return __awaiter(_this, void 0, void 0, function () {
    var field, value, hasField, hasValue, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                field = query.field;
                value = query.value;
                hasField = field !== undefined && field !== null && field.trim() !== '';
                hasValue = value !== undefined && value !== null && value.trim() !== '';
                if ((hasField && !hasValue) || (!hasField && hasValue)) {
                    throw new errors_1.InvalidArgumentError('Exercises query', field + ":" + value);
                }
                return [4 /*yield*/, exercise_client_1.findExercisesClient(field, value)];
            case 1:
                users = _a.sent();
                if (users.length === 0)
                    throw new errors_1.NotFoundError('Users', field, value);
                return [2 /*return*/, users];
        }
    });
}); };
exports.createExercise = exercise_client_1.createExerciseClient;
exports.findExerciseById = function (exerciseId) { return __awaiter(_this, void 0, void 0, function () {
    var exercise;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!exerciseId)
                    throw new errors_1.InvalidArgumentError('Exercise', "exerciseId: " + exerciseId);
                return [4 /*yield*/, exercise_client_1.findExerciseByIdClient(exerciseId)];
            case 1:
                exercise = _a.sent();
                if (!exercise)
                    throw new errors_1.NotFoundError('Users', 'userId', exerciseId);
                return [2 /*return*/, exercise];
        }
    });
}); };
exports.editExercise = function (exerciseId, user) { return __awaiter(_this, void 0, void 0, function () {
    var findExercise;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.findExerciseById(exerciseId)];
            case 1:
                findExercise = _a.sent();
                if (!findExercise)
                    throw new errors_1.NotFoundError('Exercise', 'exerciseId', exerciseId);
                return [4 /*yield*/, exercise_client_1.editExerciseClient(exerciseId, user)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.removeExercise = function (exerciseId) { return __awaiter(_this, void 0, void 0, function () {
    var findExercise;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.findExerciseById(exerciseId)];
            case 1:
                findExercise = _a.sent();
                if (!findExercise)
                    throw new errors_1.NotFoundError('Exercise', 'exerciseId', exerciseId);
                return [4 /*yield*/, exercise_client_1.removeExerciseClient(exerciseId)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
