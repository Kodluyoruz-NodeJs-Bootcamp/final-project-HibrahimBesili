"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.createSchema = void 0;
var Joi = require('joi');
var createSchema = Joi.object({
    comment: Joi.string().required(),
    userPost: Joi.number().required(),
    user: Joi.number().required(),
});
exports.createSchema = createSchema;
var updateSchema = Joi.object({
    comment: Joi.string().required(),
});
exports.updateSchema = updateSchema;
//# sourceMappingURL=comment.js.map