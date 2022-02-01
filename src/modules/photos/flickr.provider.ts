import axios from 'axios';
import { Photo } from './photo.entity';
import { PhotosProvider } from './photo.service';

export class FlickrProvider implements PhotosProvider {
  private flickrUrl =
    'https://api.flickr.com/services/feeds/photos_public.gne?nojsoncallback=1&format=json';

  async getPhotos(): Promise<Photo[]> {
    try {
      const flickrData = await axios.get(this.flickrUrl);
      const photos = this.flickrToPhotoMapper(flickrData.data);
      return photos;
    } catch (error) {
      // fail silently
      // todo: proper error handling
      return [];
    }
  }

  async getPhotosByTag(tags: string): Promise<Photo[]> {
    try {
      const flickrData = await axios.get(`${this.flickrUrl}&tags=${tags}`);
      const photos = this.flickrToPhotoMapper(flickrData.data);
      return photos;
    } catch (error) {
      // fail silently
      // todo: proper error handling
      return [];
    }
  }

  private flickrToPhotoMapper(data: any): Photo[] {
    if (data.items === undefined) {
      throw new Error('Invalid format received');
    }
    return data.items.map((item: any) => {
      return new Photo({
        title: item.title,
        author: item.author,
        thumburl: item.media.m,
        url: this.getFullSizeUrl(item.media.m),
        tags: item.tags,
      });
    });
  }

  private getFullSizeUrl(url: string) {
    return url.replace('_m.jpg', '_b.jpg');
  }
}
