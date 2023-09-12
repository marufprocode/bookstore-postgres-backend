import { Response } from 'express';

type IApiResponse<T> = {
  success: boolean;
  statusCode: number;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
  result?: T | null;
  message?: string | null;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const {
    success,
    message = null,
    meta = null,
    result = null,
    statusCode,
  } = data;

  const response = {
    success,
    ...(message && { message }),
    ...(meta && { meta }),
    ...(result && { result }),
    statusCode,
  };

  res.status(statusCode).send(response);
};

export default sendResponse;
