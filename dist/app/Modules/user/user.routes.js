"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)("admin"), user_controller_1.userController.getAllUsers);
router.get('/:id', (0, auth_1.default)("admin"), user_controller_1.userController.getUserById);
router.patch('/:id', (0, auth_1.default)("admin"), user_controller_1.userController.updateUserById);
router.delete('/:id', (0, auth_1.default)("admin"), user_controller_1.userController.deleteUser);
router.post('/api/v1/users', user_controller_1.userController.createUser);
exports.default = router;
