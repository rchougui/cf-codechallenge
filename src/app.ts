import express from 'express';
import { corsAllowAll } from './modules/shared/corsallow';
import { photosRouter } from './modules/photos/photo.route';

const app: express.Application = express();

const port = 1204;

app.use(corsAllowAll);

app.use(photosRouter);

app.listen(port, function () {
  console.log(`API is listening on port ${port} !`);
});
