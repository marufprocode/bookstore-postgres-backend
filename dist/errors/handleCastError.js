"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//it will check if any object id length is large or smaller than stadard length of mongoose object id
const handleCastError = (error) => {
    const errors = [
        {
            path: error.path,
            message: 'Invalid Object Id',
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Cast Error',
        errorMessages: errors,
    };
};
exports.default = handleCastError;
