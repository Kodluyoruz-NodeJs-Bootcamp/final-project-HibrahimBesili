import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import HttpStatusCodes from "http-status-codes";

export default (schema: ObjectSchema) =>
    (req: Request, res: Response, next: NextFunction) => {

        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        const { body } = req;
        
        const { error } = schema.validate(req.body, options);

        if (error) {
            return res.status(HttpStatusCodes.BAD_REQUEST).send({ error: error.message });
        }
        next();
    };