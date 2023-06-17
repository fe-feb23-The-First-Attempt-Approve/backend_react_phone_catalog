/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-shadow
import { NextFunction, Response, Request } from 'express';
import { ApiError } from '../exceptions/ApiError';

export const errorMiddleware = (
  error: Error, req: Request, res: Response, next: NextFunction,
) => {
  if (error instanceof ApiError) {
    // eslint-disable-next-line no-shadow
    const { status, message, errors } = error;

    res.status(status).send({ message, errors });
  }

  res.status(500).send({
    message: 'Unexpected error',
  });
};
