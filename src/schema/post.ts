import {ObjectSchema } from "joi";
const Joi = require('joi');

const createSchema: ObjectSchema = Joi.object({
    name: Joi.string().required(),
    isShared : Joi.number(),
    typeId: Joi.number().required(),
  });

  const updateSchema: ObjectSchema = Joi.object({
    name: Joi.string(),
    isShared : Joi.boolean(),
  });

export { createSchema,updateSchema };