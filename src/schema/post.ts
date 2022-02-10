import {ObjectSchema } from "joi";
const Joi = require('joi');

const createSchema: ObjectSchema = Joi.object({
    name: Joi.string().required(),
    isShared : Joi.boolean(),
    type: Joi.number().required(),
    user: Joi.number().required(),
  });

  const updateSchema: ObjectSchema = Joi.object({
    name: Joi.string(),
    isShared : Joi.number(),
  });

export { createSchema,updateSchema };