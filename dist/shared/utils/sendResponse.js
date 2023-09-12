"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    const { success, message = null, meta = null, result = null, statusCode, } = data;
    const response = Object.assign(Object.assign(Object.assign(Object.assign({ success }, (message && { message })), (meta && { meta })), (result && { result })), { statusCode });
    res.status(statusCode).send(response);
};
exports.default = sendResponse;
