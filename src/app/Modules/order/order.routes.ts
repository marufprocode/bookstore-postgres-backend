import express from 'express'
import { OrderController } from './order.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../shared/enums/user'

const router = express.Router()

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.createOrder
)
router.get('/', auth(), OrderController.getAllOrders)
router.get(
  '/:orderId',
  auth(),
  OrderController.getOrderById
)

export default router
