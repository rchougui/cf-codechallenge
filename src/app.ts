import express from 'express';
import { photosRouter } from './modules/photos/photo.route';

const app: express.Application = express();

const port = 3000;

app.use(photosRouter);

app.listen(port, function () {
  console.log(`API is listening on port ${port} !`);
});
