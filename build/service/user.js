"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const bcrypt = require("bcryptjs");
const jwt = __importStar(require("jsonwebtoken"));
require("reflect-metadata");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const SECRET_KEY = process.env.SECRET_OR_KEY;
//const EXPIRE_TIME = process.env.EXPIRE_TIME;
const register = function (newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = bcrypt.genSaltSync(10);
        const hashed = bcrypt.hashSync(newUser.password, salt);
        newUser.password = hashed;
        newUser.createdTime = new Date();
        let user = yield user_1.User.create(newUser).save();
    });
};
exports.register = register;
const findUserByEmail = function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_1.User.findOne({ email: email });
    });
};
exports.findUserByEmail = findUserByEmail;
const findUserById = function (Id) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_1.User.findOne(Id);
    });
};
exports.findUserById = findUserById;
const createJWTToken = function (user) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = {
            id: user.id,
            exp: Math.floor(Date.now() / 1000) + 2 * 60 * 60,
        };
        const token = jwt.sign(payload, SECRET_KEY);
        return token;
    });
};
exports.createJWTToken = createJWTToken;
//# sourceMappingURL=user.js.map