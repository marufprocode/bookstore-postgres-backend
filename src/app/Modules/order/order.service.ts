import prisma from '../../../shared/prisma';
import { Order } from '@prisma/client';

const createOrder = async (orderData: Order): Promise<Order> => {
  const newOrder = await prisma.order.create({
    data: orderData,
  });
  return newOrder;
};

const getAllOrders = async (): Promise<Order[]> => {
  const orders = await prisma.order.findMany();
  return orders;
};

const getOrderById = async (
  orderId: string,
  userId: string
): Promise<Order | null> => {
  const order = await prisma.order.findUnique({
    where: { id: orderId, userId: userId },
  });
  return order;
};

export const orderService = {
  createOrder,
  getAllOrders,
  getOrderById,
};
