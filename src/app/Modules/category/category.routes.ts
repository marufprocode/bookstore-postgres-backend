import express from 'express';
import { categoryController } from './category.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/create-category', categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.patch('/:id', auth("admin"), categoryController.updateCategoryById);
router.delete('/:id', auth("admin"), categoryController.deleteCategory);

export default router;
