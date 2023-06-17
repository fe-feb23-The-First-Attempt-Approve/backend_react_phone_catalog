/* eslint-disable no-shadow */
export class ApiError extends Error {
  status: number;
  message: string;
  errors: any;
  constructor(status: number, message: string, errors = {}) {
    super(message);

    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message: string, errors: any) {
    return new ApiError(400, message, errors);
  }

  static Unauthorized() {
    return new ApiError(401, 'User is not autorized');
  }

  static NotFound() {
    return new ApiError(404, 'Not found');
  }
}
