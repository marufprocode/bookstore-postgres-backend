"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt_refresh_expires_in = exports.jwt_expires_in = exports.jwt_refresh_secret = exports.jwt_secret = exports.bycrypt_salt_rounds = exports.database_url = exports.port = exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.env = process.env.NODE_ENV;
exports.port = process.env.PORT;
exports.database_url = process.env.DATABASE_URL;
exports.bycrypt_salt_rounds = process.env.BCRYPT_SALT_ROUNDS;
exports.jwt_secret = process.env.JWT_SECRET_KEY;
exports.jwt_refresh_secret = process.env.JWT_REFRESH_SECRET;
exports.jwt_expires_in = process.env.JWT_EXPIRES_IN;
exports.jwt_refresh_expires_in = process.env.JWT_REFRESH_EXPIRES_IN;
