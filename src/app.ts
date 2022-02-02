import express from 'express';
import { corsAllowAll } from './modules/shared/corsallow';
import { photosRouter } from './modules/photos/photo.route';
import * as path from 'path';

const app: express.Application = express();

const port = 1204;

// allowing cors for dev
app.use(corsAllowAll);

app.use(photosRouter);

// serve static apps
app.use('/react', express.static(path.join(__dirname, '/react-app')));
app.use('/angular', express.static(path.join(__dirname, '/angular-app')));

app.listen(port, function () {
  console.log(`API is listening on port ${port} !`);
});
