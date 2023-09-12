"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    const responseData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
    };
    if (data.data)
        responseData['data'] = data.data;
    if (data.meta)
        responseData['meta'] = data.meta;
    if (data.token)
        responseData['token'] = data.token;
    res.status(data.statusCode).json(responseData);
};
exports.default = sendResponse;
