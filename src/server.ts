import express from 'express';
import cors from 'cors';
import { dbinit } from './utils/dbinit';
import { router as phonesRouter } from './routes/phones';
import { router as tabletsRouter } from './routes/tablets';
import { router as accessoriesRouter } from './routes/accessories';
import { router as productsRouter } from './routes/products';
import { router as authRouter } from './routes/auth';
import { errorMiddleware } from './middlewares/errorMiddleware';

const PORT = 3000;

const server = express();

dbinit();

server.use(cors());
server.use(express.json());
server.use('/phones', phonesRouter);
server.use('/tablets', tabletsRouter);
server.use('/accessories', accessoriesRouter);
server.use('/products', productsRouter);
server.use(authRouter);
server.use(errorMiddleware);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Running on http://localhost:${PORT}`);
});
