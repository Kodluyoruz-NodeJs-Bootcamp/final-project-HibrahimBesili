"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../controller/user");
var user_2 = require("../schema/user");
var validate_1 = require("../middlewares/validate");
var router = (0, express_1.Router)();
router.post('/register', (0, validate_1.default)(user_2.registerSchema), user_1.createUser);
router.post('/login', (0, validate_1.default)(user_2.loginSchema), user_1.login);
exports.default = router;
//# sourceMappingURL=user.js.map