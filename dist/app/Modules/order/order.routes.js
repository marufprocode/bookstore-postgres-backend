"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../shared/enums/user");
const router = express_1.default.Router();
router.post('/create-order', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.createOrder);
router.get('/', (0, auth_1.default)(), order_controller_1.OrderController.getAllOrders);
router.get('/:orderId', (0, auth_1.default)(), order_controller_1.OrderController.getOrderById);
exports.default = router;
