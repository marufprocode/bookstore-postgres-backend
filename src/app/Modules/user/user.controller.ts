import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import {userService} from './user.service';
import sendResponse from '../../../shared/sendResponse';

const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'User created successfully',
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error creating user',
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Users retrieved successfully',
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error retrieving users',
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User retrieved successfully',
      data: user,
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
        message: 'Error retrieving user',
      });
    }
  }
};

const updateUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const updatedUser = await userService.updateUserById(userId, req.body);
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error updating user',
    });
  }
};


const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    await userService.deleteUserById(userId);
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error deleting user',
    });
  }
};

const getUserProfile = async (req: Request, res: Response) => {

    if (!req.user) {
        sendResponse(res, {
          statusCode: httpStatus.UNAUTHORIZED,
          success: false,
          message: 'Unauthorized. User not authenticated.',
        });
        return;
      }

    const userId = req.user.id; 
  
    const userProfile = await userService.getUserProfile(userId);
  
    if (userProfile) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User profile retrieved successfully',
        data: userProfile,
      });
    } else {
      sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'User not found',
      });
    }
  };

  
export const userController =  {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUser,
  getUserProfile
};
