"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post('/create-order', order_controller_1.OrderController.createOrder);
router.get('/', order_controller_1.OrderController.getAllOrders);
router.get('/:orderId', order_controller_1.OrderController.getOrderById);
exports.default = router;
