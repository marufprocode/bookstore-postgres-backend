"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodValidationError = (err) => {
    const errors = err.issues.map((issue) => {
        var _a;
        return {
            path: issue === null || issue === void 0 ? void 0 : issue.path[((_a = issue === null || issue === void 0 ? void 0 : issue.path) === null || _a === void 0 ? void 0 : _a.length) - 1],
            message: issue === null || issue === void 0 ? void 0 : issue.message,
        };
    });
    return {
        statusCode: 400,
        message: 'Validation Error !',
        errorMessages: errors,
    };
};
exports.default = handleZodValidationError;
