import { paginationHelpers } from './../../../helpers/paginationHelper';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { bookService } from './book.service';
import { IBookFilterRequest } from './book.interface';
import { IPaginationOptions } from '../../../interfaces/pagination';
// Create a new book
const createBook = catchAsync(async (req: Request, res: Response) => {
  const book = await bookService.createBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully!',
    data: book,
  });
});

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { searchTerm, category, ...rest } = req.query;

    const filters: IBookFilterRequest = {
      searchTerm: searchTerm ? (searchTerm as string) : undefined,
      category: category ? (category as string) : undefined,
    };

    const options: IPaginationOptions =
      paginationHelpers.calculatePagination(rest);

    const books = await bookService.getAllBooks(filters, options);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Books with associated category data fetched successfully',
      meta: {
        page: options.page,
        size: options.limit,
        total: books.meta.total,
        totalPage: Math.ceil(books.meta.total / (options.limit || 10)),
      },
      data: books.data,
    });
  } catch (error) {
    next(error);
  }
};

// Get books by category
const getBooksByCategory = catchAsync(async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const books = await bookService.getBooksByCategory(categoryId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books with associated category data fetched successfully',
    data: books,
  });
});

// Get a single book by ID
const getBookById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await bookService.getBookById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetched successfully',
    data: book,
  });
});

// Update a book by ID
const updateBookById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedBook = await bookService.updateBookById(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: updatedBook,
  });
});

// Delete a book by ID
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedBook = await bookService.deleteBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book is deleted successfully',
    data: deletedBook,
  });
});

export const bookController = {
  createBook,
  getAllBooks,
  getBooksByCategory,
  getBookById,
  updateBookById,
  deleteBook,
};
