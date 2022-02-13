"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('joi');
const registerSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string(),
    email: Joi.string().required(),
    userName: Joi.string().alphanum().required().min(3),
    password: Joi.string().required().min(8),
});
exports.registerSchema = registerSchema;
const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
});
exports.loginSchema = loginSchema;
//# sourceMappingURL=user.js.map