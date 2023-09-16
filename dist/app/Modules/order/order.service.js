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
exports.orderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = yield prisma_1.default.order.create({
        data: {
            userId: orderData.userId,
            status: 'pending',
            orderedBooks: {
                create: orderData.orderedBooks.map(book => ({
                    book: {
                        connect: { id: book.bookId },
                    },
                    quantity: book.quantity,
                })),
            },
        },
        include: {
            orderedBooks: true,
        },
    });
    return newOrder;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllOrders = (conditions) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield prisma_1.default.order.findMany(conditions);
    return orders;
});
const getOrderById = (orderId, userId, userRole) => __awaiter(void 0, void 0, void 0, function* () {
    let order = null;
    if (userRole === 'customer') {
        order = yield prisma_1.default.order.findUnique({
            where: { id: orderId, userId: userId },
            include: {
                orderedBooks: {
                    select: {
                        bookId: true,
                        quantity: true,
                    },
                },
            },
        });
    }
    else if (userRole === 'admin') {
        order = yield prisma_1.default.order.findUnique({
            where: { id: orderId },
            include: {
                orderedBooks: {
                    select: {
                        bookId: true,
                        quantity: true,
                    },
                },
            },
        });
    }
    return order;
});
exports.orderService = {
    createOrder,
    getAllOrders,
    getOrderById,
};
