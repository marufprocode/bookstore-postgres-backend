"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT_Token = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT_Token = (dbUser, secret_key, expire_time) => {
    const token = jsonwebtoken_1.default.sign({
        id: dbUser === null || dbUser === void 0 ? void 0 : dbUser.id,
        role: dbUser === null || dbUser === void 0 ? void 0 : dbUser.role,
    }, secret_key, {
        expiresIn: expire_time,
    });
    return token;
};
exports.generateJWT_Token = generateJWT_Token;
