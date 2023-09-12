import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export const handleNoRouteFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(httpStatus.NOT_FOUND).send({
    success: false,
    message: 'Not found !',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found !',
      },
    ],
  });
  next();
};
