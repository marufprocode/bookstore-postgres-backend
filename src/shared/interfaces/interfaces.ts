import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export type IPaginationOptions = {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
};

export type IGenericPaginationResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

export type CustomPaginationOptions = {
  skip: number;
  page: number;
  limit: number;
  sort: {
    [x: string]: 'asc' | 'desc';
  };
};


// add user interface in Express Request interface system. 
declare global {
  namespace Express {
    interface Request {
      user: JwtPayload | null;
    }
  }
}

//or

// export interface IAuthenticatedRequest extends Request {
//   user?: JwtPayload;
// }
