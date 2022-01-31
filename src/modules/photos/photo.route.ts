import { Request, Response, Router } from 'express';
import { FlickrProvider } from './flickr.provider';
import { PhotoService } from './photo.service';

const photosRouter = Router();
const photosProvider = new FlickrProvider();
const photosService = new PhotoService(photosProvider);

photosRouter.get('/photos', async (req: Request, res: Response) => {
  const photos = await photosService.displayPhotos();
  res.json(photos);
});

photosRouter.get('/photos/:tags', async (req: Request, res: Response) => {
  const tags = req.params.tags;
  const photos = await photosService.displayPhotosByTags(tags);
  res.json(photos);
});

export { photosRouter };
