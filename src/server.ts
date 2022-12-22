import express from 'express';
import dotenv from 'dotenv';
import { loggerMiddleware } from './middleware/middleware';

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(loggerMiddleware);

app.get('/test', (request, response, next) => {
  response.json({
    success: true,
    data: {
      array: [1, 2, 3],
      message: 'Hello from test endpoint',
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
