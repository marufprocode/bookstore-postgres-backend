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
exports.categoryController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const category_service_1 = require("./category.service");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCategory = yield category_service_1.categoryService.createCategory(req.body);
        res.status(http_status_1.default.CREATED).json({
            success: true,
            statusCode: http_status_1.default.CREATED,
            message: 'Category created successfully',
            data: newCategory,
        });
    }
    catch (error) {
        console.error(error);
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
            success: false,
            statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
            message: 'Error creating category',
        });
    }
});
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_service_1.categoryService.getAllCategories();
        res.status(http_status_1.default.OK).json({
            success: true,
            statusCode: http_status_1.default.OK,
            message: 'Categories retrieved successfully',
            data: categories,
        });
    }
    catch (error) {
        console.error(error);
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
            success: false,
            statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
            message: 'Error retrieving categories',
        });
    }
});
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.id;
    try {
        const category = yield category_service_1.categoryService.getCategoryById(categoryId);
        if (!category) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Category not found');
        }
        res.status(http_status_1.default.OK).json({
            success: true,
            statusCode: http_status_1.default.OK,
            message: 'Category retrieved successfully',
            data: category,
        });
    }
    catch (error) {
        console.error(error);
        if (error instanceof ApiError_1.default) {
            res.status(error.statusCode).json({
                success: false,
                statusCode: error.statusCode,
                message: error.message,
            });
        }
        else {
            res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
                success: false,
                statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
                message: 'Error retrieving category',
            });
        }
    }
});
const updateCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.id;
    try {
        const updatedCategory = yield category_service_1.categoryService.updateCategoryById(categoryId, req.body);
        res.status(http_status_1.default.OK).json({
            success: true,
            statusCode: http_status_1.default.OK,
            message: 'Category updated successfully',
            data: updatedCategory,
        });
    }
    catch (error) {
        console.error(error);
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
            success: false,
            statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
            message: 'Error updating category',
        });
    }
});
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.id;
    try {
        yield category_service_1.categoryService.deleteCategoryById(categoryId);
        res.status(http_status_1.default.OK).json({
            success: true,
            statusCode: http_status_1.default.OK,
            message: 'Category deleted successfully',
        });
    }
    catch (error) {
        console.error(error);
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
            success: false,
            statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
            message: 'Error deleting category',
        });
    }
});
exports.categoryController = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategory,
};
