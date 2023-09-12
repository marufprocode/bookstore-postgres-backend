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
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createCategory = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategory = yield prisma.category.create({
        data: categoryData,
    });
    return newCategory;
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield prisma.category.findMany();
    return categories;
});
const getCategoryById = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma.category.findUnique({
        where: { id: categoryId },
    });
    return category;
});
const updateCategoryById = (categoryId, categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedCategory = yield prisma.category.update({
        where: { id: categoryId },
        data: categoryData,
    });
    return updatedCategory;
});
const deleteCategoryById = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.category.delete({
        where: { id: categoryId },
    });
});
exports.categoryService = { createCategory, getAllCategories, getCategoryById, updateCategoryById, deleteCategoryById };
