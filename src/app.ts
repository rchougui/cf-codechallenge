import express, { Application, Request, Response } from 'express';

const app: Application = express();

const port = 3000;

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello Api');
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
