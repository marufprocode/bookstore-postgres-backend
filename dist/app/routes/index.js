"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = __importDefault(require("../Modules/book/book.routes"));
const category_routes_1 = __importDefault(require("../Modules/category/category.routes"));
const order_routes_1 = __importDefault(require("../Modules/order/order.routes"));
const user_routes_1 = __importDefault(require("../Modules/user/user.routes"));
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/book',
        route: book_routes_1.default,
    },
    {
        path: '/category',
        route: category_routes_1.default,
    },
    {
        path: '/order',
        route: order_routes_1.default,
    },
    {
        path: '/user',
        route: user_routes_1.default,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
