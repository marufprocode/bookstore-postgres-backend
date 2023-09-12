"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const router = express_1.default.Router();
router.post('/create-category', category_controller_1.categoryController.createCategory);
router.get('/', category_controller_1.categoryController.getAllCategories);
router.get('/:id', category_controller_1.categoryController.getCategoryById);
router.patch('/:id', category_controller_1.categoryController.updateCategoryById);
router.delete('/:id', category_controller_1.categoryController.deleteCategory);
exports.default = router;
