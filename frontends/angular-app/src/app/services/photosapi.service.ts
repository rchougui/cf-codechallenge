import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../../../../src/modules/photos/photo.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private httpClient: HttpClient) {}
  public get(tags = '') {
    return this.httpClient.get<Photo[]>(`${environment.api_url}/photos/${tags}`);
  }
}
