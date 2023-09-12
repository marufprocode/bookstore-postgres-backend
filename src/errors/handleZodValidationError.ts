import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from './interfaces/IGenericErrorResponse';
import { IGenericErrorMessage } from './interfaces/IGenericErrorMessage';

const handleZodValidationError = (err: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path?.length - 1], // error path exists in the last index of issue.path array
      message: issue?.message,
    };
  });
  return {
    statusCode: 400,
    message: 'Validation Error !',
    errorMessages: errors,
  };
};

export default handleZodValidationError;
