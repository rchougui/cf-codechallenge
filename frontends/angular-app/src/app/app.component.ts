import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from '../../../../src/modules/photos/photo.entity';
import { PhotosService } from './services/photosapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  photos$: Observable<Photo[]> = of([]);

  constructor(private photoService: PhotosService) {}

  ngOnInit(): void {
    this.photos$ = this.photoService.get();
  }

  searchByTag(tags: string) {
    this.photos$ = this.photoService.get(tags);
  }
}
