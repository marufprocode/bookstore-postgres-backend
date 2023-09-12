import { IGenericErrorMessage } from './IGenericErrorMessage';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
