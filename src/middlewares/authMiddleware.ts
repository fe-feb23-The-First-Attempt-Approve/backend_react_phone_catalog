// // eslint-disable-next-line no-shadow
// import { NextFunction, Request, Response } from 'express';
// import { validateAccessToken } from '../services/jwtService';

// export const authMiddleware = (
//   req: Request, res: Response, next: NextFunction,
// ) => {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader) {
//     res.sendStatus(401);

//     return;
//   }

//   const [, accessToken] = authHeader.split(' ');

//   if (!accessToken) {
//     res.sendStatus(401);

//     return;
//   }

//   const userData = validateAccessToken(accessToken);

//   if (!userData) {
//     res.sendStatus(401);

//     return;
//   }

//   next();
// };
