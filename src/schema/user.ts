import {ObjectSchema } from "joi";
const Joi = require('joi');

const registerSchema: ObjectSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string(),
    email : Joi.string().required(),
    userName: Joi.string().alphanum().required().min(3),
    password: Joi.string().required().min(8),
  });
  

const loginSchema: ObjectSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required().min(8),
});


export { loginSchema, registerSchema };