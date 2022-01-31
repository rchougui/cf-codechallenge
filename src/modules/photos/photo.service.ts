import { Photo } from './photo.entity';

export interface PhotosProvider {
  getPhotos(): Promise<Photo[]>;
  getPhotosByTag(tags: string): Promise<Photo[]>;
}

export class PhotoService {
  private repository: PhotosProvider;
  constructor(imageProvider: PhotosProvider) {
    this.repository = imageProvider;
  }

  async displayPhotos() {
    // todo: add proper error handling
    return await this.repository.getPhotos();
  }

  async displayPhotosByTags(tags: string) {
    // todo: add proper error handling
    return await this.repository.getPhotosByTag(tags);
  }
}
