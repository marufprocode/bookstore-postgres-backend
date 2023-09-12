import express from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth("admin"), userController.getAllUsers);
router.get('/:id', auth("admin"), userController.getUserById);
router.patch('/:id', auth("admin"), userController.updateUserById);
router.delete('/:id', auth("admin"), userController.deleteUser);
router.post('/api/v1/users', userController.createUser);

export default router;
