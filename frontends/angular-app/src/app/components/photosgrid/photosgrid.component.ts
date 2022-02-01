import { Component, Input } from '@angular/core';
import { Photo } from '../../../../../../src/modules/photos/photo.entity';

@Component({
  selector: 'app-photosgrid',
  templateUrl: './photosgrid.component.html',
  styleUrls: ['./photosgrid.component.css'],
})
export class PhotosgridComponent {
  @Input() photos: Photo[] | null = [];
}
