"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = require("passport");
const user_1 = require("../controller/user");
const router = express_1.Router();
router.get('/google', passport_1.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport_1.authenticate('google'), user_1.googleLogin);
router.get('/facebook', passport_1.authenticate('facebook', { scope: [, 'email'] }));
router.get('/facebook/callback', passport_1.authenticate('facebook'), user_1.facebookLogin);
exports.default = router;
//# sourceMappingURL=auth.js.map