import express from 'express';
import cors from 'cors';
import { Phone } from './models/Phone';

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());

server.get('/phones', async(req, res) => {
  const phones = await Phone.findAll();

  res.send(phones);
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Running on http://localhost:${PORT}`);
});
