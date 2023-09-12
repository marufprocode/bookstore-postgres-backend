"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNoRouteFound = void 0;
const http_status_1 = __importDefault(require("http-status"));
const handleNoRouteFound = (req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).send({
        success: false,
        message: 'Not found !',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'API not found !',
            },
        ],
    });
    next();
};
exports.handleNoRouteFound = handleNoRouteFound;
