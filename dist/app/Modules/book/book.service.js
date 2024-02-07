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
exports.bookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBook = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const newBook = yield prisma_1.default.book.create({
        data: bookData,
        include: {
            category: true, // Include the associated category
        },
    });
    return newBook;
});
const getAllBooks = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip } = options;
    const { searchTerm, category, sortBy, sortOrder, minPrice, maxPrice } = filters;
    const whereConditions = {};
    if (searchTerm) {
        whereConditions.OR = [
            {
                title: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            },
            {
                author: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            },
            {
                genre: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            },
        ];
    }
    if (category) {
        whereConditions.categoryId = category;
    }
    if (minPrice !== undefined && maxPrice !== undefined) {
        whereConditions.price = {
            gte: minPrice,
            lte: maxPrice,
        };
    }
    const orderBy = {};
    if (sortBy && sortOrder) {
        orderBy[sortBy] = sortOrder;
    }
    const result = yield prisma_1.default.book.findMany({
        include: {
            category: true,
            reviewAndRating: true,
        },
        where: whereConditions,
        skip,
        take: limit,
        orderBy: Object.keys(orderBy).length > 0 ? orderBy : { createdAt: 'desc' },
    });
    const total = yield prisma_1.default.book.count({
        where: whereConditions,
    });
    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
});
const getBooksByCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield prisma_1.default.book.findMany({
        where: {
            categoryId,
        },
    });
    return books;
});
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    if (!book) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Book not found');
    }
    return book;
});
const updateBookById = (id, updatedBookData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBook = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data: updatedBookData,
    });
    return updatedBook;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedBook = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return deletedBook;
});
exports.bookService = {
    createBook,
    getAllBooks,
    getBooksByCategory,
    getBookById,
    updateBookById,
    deleteBook,
};
