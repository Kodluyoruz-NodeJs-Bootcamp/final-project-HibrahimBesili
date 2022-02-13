"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const user_1 = require("../service/user");
var bcrypt = require('bcryptjs');
const router = express_1.Router();
exports.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newUser = Object.assign({}, req.body);
    try {
        const user = yield user_1.findUserByEmail(newUser.email);
        if (user) {
            return res.status(http_status_codes_1.default.BAD_REQUEST).json({ errors: [{ msg: "User already exists" }] });
        }
        else {
            const user = yield user_1.register(newUser);
            res.status(http_status_codes_1.default.CREATED).send(user);
        }
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ auth: false, message: error });
    }
});
exports.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newUser = Object.assign({}, req.body);
    const user = yield user_1.findUserByEmail(newUser.email);
    if (!user) {
        res.status(400).send({ message: 'Invalid email or password' });
    }
    else {
        const isMatch = yield bcrypt.compare(newUser.password, user.password);
        if (isMatch) {
            const token = yield user_1.createJWTToken(user);
            res.status(http_status_codes_1.default.OK).send({ token });
        }
        else {
            res.status(http_status_codes_1.default.BAD_REQUEST).send({ message: 'Invalid email or password' });
        }
    }
});
exports.googleLogin = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const User = Object.assign({}, req["user"]);
    const token = yield user_1.createJWTToken(User);
    res.status(http_status_codes_1.default.OK).send({ token });
});
exports.facebookLogin = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const User = Object.assign({}, req["user"]);
    console.log("Facebook Login User:", User);
    const token = yield user_1.createJWTToken(User);
    res.status(http_status_codes_1.default.OK).send({ token });
});
//# sourceMappingURL=user.js.map