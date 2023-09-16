import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import prisma from '../../../shared/prisma'
import { Book } from '@prisma/client'
import { IBookFilterRequest } from './book.interface'
import { IPaginationOptions } from '../../../interfaces/pagination'

const createBook = async (bookData: Book): Promise<Book> => {
  const newBook = await prisma.book.create({
    data: bookData,
    include: {
      category: true, // Include the associated category
    },
  })
  return newBook
}

const getAllBooks = async (
  filters: IBookFilterRequest,
  options: IPaginationOptions
): Promise<{
  meta: { total: number; page: number; limit: number }
  data: Book[]
}> => {
  const { limit, page, skip } = options

  const { searchTerm, category, sortBy, sortOrder, minPrice, maxPrice } =
    filters

  const whereConditions: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  } = {}

  if (searchTerm) {
    whereConditions.OR = [
      {
        title: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      },
      {
        author: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      },
      {
        genre: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      },
    ]
  }

  if (category) {
    whereConditions.categoryId = category
  }

  if (minPrice !== undefined && maxPrice !== undefined) {
    whereConditions.price = {
      gte: minPrice,
      lte: maxPrice,
    }
  }

  const orderBy: {
    [key: string]: 'asc' | 'desc'
  } = {}

  if (sortBy && sortOrder) {
    orderBy[sortBy] = sortOrder as 'asc' | 'desc'
  }

  const result = await prisma.book.findMany({
    include: {
      category: true,
      reviewAndRating: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy: Object.keys(orderBy).length > 0 ? orderBy : { createdAt: 'desc' },
  })

  const total = await prisma.book.count({
    where: whereConditions,
  })

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  }
}

const getBooksByCategory = async (categoryId: string): Promise<Book[]> => {
  const books = await prisma.book.findMany({
    where: {
      categoryId,
    },
  })
  return books
}

const getBookById = async (id: string): Promise<Book | null> => {
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
  })
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found')
  }
  return book
}

const updateBookById = async (
  id: string,
  updatedBookData: Book
): Promise<Book> => {
  const updatedBook = await prisma.book.update({
    where: {
      id,
    },
    data: updatedBookData,
  })
  return updatedBook
}

const deleteBook = async (id: string): Promise<Book> => {
  const deletedBook = await prisma.book.delete({
    where: {
      id,
    },
  })
  return deletedBook
}

export const bookService = {
  createBook,
  getAllBooks,
  getBooksByCategory,
  getBookById,
  updateBookById,
  deleteBook,
}
