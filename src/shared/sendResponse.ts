import { Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

type IApiReponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?:
    | {
        page?: number | undefined;
        limit?: number | undefined;
        total?: number | undefined;
        size?: number | undefined;
        totalPage?: number | undefined; // Add the totalPage property
      }
    | undefined;
  data?: T | null;
  token?: JwtPayload | string;
};

const sendResponse = <T>(res: Response, data: IApiReponse<T>): void => {
  const responseData: IApiReponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
  };

  if (data.data) responseData['data'] = data.data;

  if (data.meta) responseData['meta'] = data.meta;

  if (data.token) responseData['token'] = data.token;

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
