import express from 'express';
import { bookController } from './book.controller';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post('/create-book', auth("admin"), bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:categoryId/category', bookController.getBooksByCategory);
router.get('/:id', bookController.getBookById);
router.patch('/:id', auth("admin"), bookController.updateBookById);
router.delete('/:id', auth("admin"),  bookController.deleteBook);

export default router;
