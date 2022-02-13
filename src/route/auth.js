"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = require("passport");
var user_1 = require("../controller/user");
var router = (0, express_1.Router)();
router.get('/google', (0, passport_1.authenticate)('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', (0, passport_1.authenticate)('google'), user_1.googleLogin);
router.get('/facebook', (0, passport_1.authenticate)('facebook', { scope: [, 'email'] }));
router.get('/facebook/callback', (0, passport_1.authenticate)('facebook'), user_1.facebookLogin);
exports.default = router;
//# sourceMappingURL=auth.js.map