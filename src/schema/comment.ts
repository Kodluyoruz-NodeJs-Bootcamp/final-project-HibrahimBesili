import {ObjectSchema } from "joi";
const Joi = require('joi');

const createSchema: ObjectSchema = Joi.object({
    comment: Joi.string().required(),
    userPost : Joi.number().required(),
    type: Joi.number().required(),
    user: Joi.number().required(),
  });

  const updateSchema: ObjectSchema = Joi.object({
    comment: Joi.string().required(),
  });

export { createSchema,updateSchema };