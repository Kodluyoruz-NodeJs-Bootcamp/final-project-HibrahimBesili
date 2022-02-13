"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_codes_1 = require("http-status-codes");
exports.default = (function (schema) {
    return function (req, res, next) {
        var options = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true // remove unknown props
        };
        var body = req.body;
        var error = schema.validate(req.body, options).error;
        if (error) {
            return res.status(http_status_codes_1.default.BAD_REQUEST).send({ error: error.message });
        }
        next();
    };
});
//# sourceMappingURL=validate.js.map