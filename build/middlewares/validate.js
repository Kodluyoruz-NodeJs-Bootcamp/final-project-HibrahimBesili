"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
exports.default = (schema) => (req, res, next) => {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true // remove unknown props
    };
    const { body } = req;
    const { error } = schema.validate(req.body, options);
    if (error) {
        return res.status(http_status_codes_1.default.BAD_REQUEST).send({ error: error.message });
    }
    next();
};
//# sourceMappingURL=validate.js.map