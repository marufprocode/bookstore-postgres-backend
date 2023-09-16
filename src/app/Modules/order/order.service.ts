import prisma from '../../../shared/prisma'
import { Order } from '@prisma/client'
import { IOrder, IOrderRequest } from './order.interfaces'

const createOrder = async (orderData: IOrderRequest): Promise<IOrder> => {
  const newOrder = await prisma.order.create({
    data: {
      userId: orderData.userId,
      status: 'pending',
      orderedBooks: {
        create: orderData.orderedBooks.map(book => ({
          book: {
            connect: { id: book.bookId },
          },
          quantity: book.quantity,
        })),
      },
    },
    include: {
      orderedBooks: true,
    },
  })

  return newOrder
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllOrders = async (conditions: any): Promise<Order[]> => {
  const orders = await prisma.order.findMany(conditions)
  return orders
}

const getOrderById = async (
  orderId: string,
  userId: string,
  userRole: string
): Promise<Order | null> => {
  let order = null
  if (userRole === 'customer') {
    order = await prisma.order.findUnique({
      where: { id: orderId, userId: userId },
      include: {
        orderedBooks: {
          select: {
            bookId: true,
            quantity: true,
          },
        },
      },
    })
  } else if (userRole === 'admin') {
    order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        orderedBooks: {
          select: {
            bookId: true,
            quantity: true,
          },
        },
      },
    })
  }
  return order
}

export const orderService = {
  createOrder,
  getAllOrders,
  getOrderById,
}
