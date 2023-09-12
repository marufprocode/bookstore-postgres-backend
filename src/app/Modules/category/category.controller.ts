import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import {categoryService} from './category.service';

const createCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = await categoryService.createCategory(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Category created successfully',
      data: newCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error creating category',
    });
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Categories retrieved successfully',
      data: categories,
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error retrieving categories',
    });
  }
};

const getCategoryById = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  try {
    const category = await categoryService.getCategoryById(categoryId);
    if (!category) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
    }
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category retrieved successfully',
      data: category,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      res.status(error.statusCode).json({
        success: false,
        statusCode: error.statusCode,
        message: error.message,
      });
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error retrieving category',
      });
    }
  }
};

const updateCategoryById = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  try {
    const updatedCategory = await categoryService.updateCategoryById(categoryId, req.body);
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category updated successfully',
      data: updatedCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error updating category',
    });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  try {
    await categoryService.deleteCategoryById(categoryId);
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category deleted successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error deleting category',
    });
  }
};

export const categoryController = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategory,
};
