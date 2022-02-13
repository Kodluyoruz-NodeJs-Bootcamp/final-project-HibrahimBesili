"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
var Joi = require('joi');
var registerSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string(),
    email: Joi.string().required(),
    userName: Joi.string().alphanum().required().min(3),
    password: Joi.string().required().min(8),
});
exports.registerSchema = registerSchema;
var loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
});
exports.loginSchema = loginSchema;
//# sourceMappingURL=user.js.map