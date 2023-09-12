import { IGenericErrorMessage } from './interfaces/IGenericErrorMessage';

//it will check if any object id length is large or smaller than stadard length of mongoose object id

const handleCastError = (error: any) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid Object Id',
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  };
};

export default handleCastError;
