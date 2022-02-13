"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.createSchema = void 0;
var Joi = require('joi');
var createSchema = Joi.object({
    name: Joi.string().required(),
    isShared: Joi.boolean(),
    type: Joi.number().required(),
    user: Joi.number().required(),
});
exports.createSchema = createSchema;
var updateSchema = Joi.object({
    name: Joi.string(),
    isShared: Joi.boolean(),
});
exports.updateSchema = updateSchema;
//# sourceMappingURL=post.js.map