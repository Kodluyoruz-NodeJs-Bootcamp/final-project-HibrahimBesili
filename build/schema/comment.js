"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('joi');
const createSchema = Joi.object({
    comment: Joi.string().required(),
    userPost: Joi.number().required(),
    user: Joi.number().required(),
});
exports.createSchema = createSchema;
const updateSchema = Joi.object({
    comment: Joi.string().required(),
});
exports.updateSchema = updateSchema;
//# sourceMappingURL=comment.js.map