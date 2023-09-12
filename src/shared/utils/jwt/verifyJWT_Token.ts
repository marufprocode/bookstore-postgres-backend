import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { JwtPayload } from 'jsonwebtoken';

export const verifyJWT_Token = async (token: string, key: string) => {
  try {
    return jwt.verify(token, key) as JwtPayload;
  } catch (error: any) {
    throw new ApiError(httpStatus.NOT_FOUND, error);
  }
};
