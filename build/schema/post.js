"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('joi');
const createSchema = Joi.object({
    name: Joi.string().required(),
    isShared: Joi.number(),
    typeId: Joi.number().required(),
});
exports.createSchema = createSchema;
const updateSchema = Joi.object({
    name: Joi.string(),
    isShared: Joi.boolean(),
});
exports.updateSchema = updateSchema;
//# sourceMappingURL=post.js.map