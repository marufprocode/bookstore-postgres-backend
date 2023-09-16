import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { orderService } from './order.service'
import ApiError from '../../../errors/ApiError'
import { JwtPayload } from 'jsonwebtoken'
import { IOrder, IOrderRequest } from './order.interfaces';
import { OrderedBook } from '@prisma/client'

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const userId: JwtPayload = req.user?.id
  const orderData: IOrderRequest = { ...req.body, userId }
  const newOrder: Partial<IOrder> = await orderService.createOrder(orderData)

  const responseData = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order created successfully',
    data: {
      id: newOrder.id,
      userId: newOrder.userId,
      orderedBooks: newOrder?.orderedBooks?.map(
        (orderedBook: Partial<OrderedBook>) => ({
          bookId: orderedBook.bookId,
          quantity: orderedBook.quantity,
        })
      ),
      status: newOrder.status,
      createdAt: newOrder?.createdAt?.toISOString(),
    },
  }

  sendResponse(res, responseData)
})

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  let conditions;
  if(req?.user?.role === 'admin'){
    conditions = {}
  } else if(req?.user?.role === 'customer'){
    conditions = {
      where: { userId: req.user.id },
    }
  }
  const orders = await orderService.getAllOrders(conditions)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: orders,
  })
})

const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const { orderId } = req.params
  if (!req.user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate !')
  }
  const userId = req.user.id;
  const userRole = req.user.role;
  const order = await orderService.getOrderById(orderId, userId, userRole)

  if (!order) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Order not found',
    })
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved successfully',
    data: order,
  })
})

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrderById,
}
