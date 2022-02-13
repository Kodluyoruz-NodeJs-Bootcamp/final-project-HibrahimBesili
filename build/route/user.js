"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const user_2 = require("../schema/user");
const validate_1 = __importDefault(require("../middlewares/validate"));
const router = express_1.Router();
router.post('/register', validate_1.default(user_2.registerSchema), user_1.createUser);
router.post('/login', validate_1.default(user_2.loginSchema), user_1.login);
exports.default = router;
//# sourceMappingURL=user.js.map