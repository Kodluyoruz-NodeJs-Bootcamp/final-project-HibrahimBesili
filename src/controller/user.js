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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookLogin = exports.googleLogin = exports.login = exports.createUser = void 0;
var express_1 = require("express");
var http_status_codes_1 = __importDefault(require("http-status-codes"));
var user_1 = require("../service/user");
var bcrypt = require('bcryptjs');
var router = (0, express_1.Router)();
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, user, user_2, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newUser = __assign({}, req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, (0, user_1.findUserByEmail)(newUser.email)];
            case 2:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                return [2 /*return*/, res.status(http_status_codes_1.default.BAD_REQUEST).json({ errors: [{ msg: "User already exists" }] })];
            case 3: return [4 /*yield*/, (0, user_1.register)(newUser)];
            case 4:
                user_2 = _a.sent();
                res.status(http_status_codes_1.default.CREATED).send(user_2);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                res.status(http_status_codes_1.default.BAD_REQUEST).json({ auth: false, message: error_1 });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, user, isMatch, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newUser = __assign({}, req.body);
                return [4 /*yield*/, (0, user_1.findUserByEmail)(newUser.email)];
            case 1:
                user = _a.sent();
                if (!!user) return [3 /*break*/, 2];
                res.status(400).send({ message: 'Invalid email or password' });
                return [3 /*break*/, 6];
            case 2: return [4 /*yield*/, bcrypt.compare(newUser.password, user.password)];
            case 3:
                isMatch = _a.sent();
                if (!isMatch) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, user_1.createJWTToken)(user)];
            case 4:
                token = _a.sent();
                res.status(http_status_codes_1.default.OK).send({ token: token });
                return [3 /*break*/, 6];
            case 5:
                res.status(http_status_codes_1.default.BAD_REQUEST).send({ message: 'Invalid email or password' });
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var googleLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var User, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                User = __assign({}, req["user"]);
                return [4 /*yield*/, (0, user_1.createJWTToken)(User)];
            case 1:
                token = _a.sent();
                res.status(http_status_codes_1.default.OK).send({ token: token });
                return [2 /*return*/];
        }
    });
}); };
exports.googleLogin = googleLogin;
var facebookLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var User, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                User = __assign({}, req["user"]);
                console.log("Facebook Login User:", User);
                return [4 /*yield*/, (0, user_1.createJWTToken)(User)];
            case 1:
                token = _a.sent();
                res.status(http_status_codes_1.default.OK).send({ token: token });
                return [2 /*return*/];
        }
    });
}); };
exports.facebookLogin = facebookLogin;
//# sourceMappingURL=user.js.map