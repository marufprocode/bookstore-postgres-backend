import express from 'express';
import auth from '../../middlewares/auth';
import { userController } from '../user/user.controller';

const router = express.Router();

router.get('/', auth('customer', 'admin'), userController.getUserProfile);

export default router;