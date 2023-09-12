"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/create-book', book_controller_1.bookController.createBook);
router.get('/', book_controller_1.bookController.getAllBooks);
router.get('/:categoryId/category', book_controller_1.bookController.getBooksByCategory);
router.get('/:id', book_controller_1.bookController.getBookById);
router.patch('/:id', book_controller_1.bookController.updateBookById);
router.delete('/:id', book_controller_1.bookController.deleteBook);
exports.default = router;
