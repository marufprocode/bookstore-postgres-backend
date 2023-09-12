import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { orderService } from './order.service';
import { Order } from '@prisma/client';
import ApiError from '../../../errors/ApiError';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const orderData: Order = req.body;
  const newOrder = await orderService.createOrder(orderData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: newOrder,
  });
});

const getAllOrders = catchAsync(async (_req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: orders,
  });
});

const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const { orderId } = req.params;
  if (!req.user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate !');
  }
  const userId = req.user.id;
  const order = await orderService.getOrderById(orderId,userId);

  if (!order) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Order not found',
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved successfully',
    data: order,
  });
});

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrderById,
};
