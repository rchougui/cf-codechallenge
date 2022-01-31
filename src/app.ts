import express, { Application, NextFunction, Request, Response } from 'express';
import { photosRouter } from './modules/photos/photo.route';

const app: express.Application = express();

const port = 3000;

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  next();
});
app.use(photosRouter);
app.listen(port, function () {
  console.log(`API is listening on port ${port} !`);
});
