import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());

server.get('/', (req, res) => {
  res.send('Нарешті!!!!!!!!!!!!!!!!!!!!');
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Running on http://localhost:${PORT}`);
});
