"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/api/v1/users', user_controller_1.userController.createUser);
router.get('/api/v1/users', user_controller_1.userController.getAllUsers);
router.get('/profile', (0, auth_1.default)(), user_controller_1.userController.getUserProfile);
router.get('/api/v1/users/:id', user_controller_1.userController.getUserById);
router.patch('/api/v1/users/:id', user_controller_1.userController.updateUserById);
router.delete('/api/v1/users/:id', user_controller_1.userController.deleteUser);
exports.default = router;
