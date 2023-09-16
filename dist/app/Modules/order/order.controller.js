"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const order_service_1 = require("./order.service");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    const orderData = Object.assign(Object.assign({}, req.body), { userId });
    const newOrder = yield order_service_1.orderService.createOrder(orderData);
    const responseData = {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Order created successfully',
        data: {
            id: newOrder.id,
            userId: newOrder.userId,
            orderedBooks: (_b = newOrder === null || newOrder === void 0 ? void 0 : newOrder.orderedBooks) === null || _b === void 0 ? void 0 : _b.map((orderedBook) => ({
                bookId: orderedBook.bookId,
                quantity: orderedBook.quantity,
            })),
            status: newOrder.status,
            createdAt: (_c = newOrder === null || newOrder === void 0 ? void 0 : newOrder.createdAt) === null || _c === void 0 ? void 0 : _c.toISOString(),
        },
    };
    (0, sendResponse_1.default)(res, responseData);
}));
const getAllOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e;
    let conditions;
    if (((_d = req === null || req === void 0 ? void 0 : req.user) === null || _d === void 0 ? void 0 : _d.role) === 'admin') {
        conditions = {};
    }
    else if (((_e = req === null || req === void 0 ? void 0 : req.user) === null || _e === void 0 ? void 0 : _e.role) === 'customer') {
        conditions = {
            where: { userId: req.user.id },
        };
    }
    const orders = yield order_service_1.orderService.getAllOrders(conditions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: orders,
    });
}));
const getOrderById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderId } = req.params;
    if (!req.user) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Unauthorized!');
    }
    const userId = req.user.id;
    const userRole = req.user.role;
    const order = yield order_service_1.orderService.getOrderById(orderId, userId, userRole);
    if (!order) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: 'Order not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Order retrieved successfully',
        data: order,
    });
}));
exports.OrderController = {
    createOrder,
    getAllOrders,
    getOrderById,
};
