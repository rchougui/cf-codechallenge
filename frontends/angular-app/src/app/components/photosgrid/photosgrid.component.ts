import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../../../../../src/modules/photos/photo.entity';

@Component({
  selector: 'app-photosgrid',
  templateUrl: './photosgrid.component.html',
  styleUrls: ['./photosgrid.component.css'],
})
export class PhotosgridComponent implements AfterViewChecked {
  @Input() photos: Photo[] | null = [];
  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    console.log(this.photos);
  }
}
