import {ObjectSchema } from "joi";
const Joi = require('joi');

const registerSchema: ObjectSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string(),
    userName: Joi.string().alphanum().required().min(3),
    password: Joi.string().required().min(8),
  });
  

const loginSchema: ObjectSchema = Joi.object({
  userName: Joi.string().alphanum().required().min(3),
  password: Joi.string().required().min(8),
});


export { loginSchema, registerSchema };