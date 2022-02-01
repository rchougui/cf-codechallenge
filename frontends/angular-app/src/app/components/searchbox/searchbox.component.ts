/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
})
export class SearchboxComponent implements OnInit {
  @Output() searchCallback = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  onSubmit(tags: string) {
    this.searchCallback.emit(tags);
    return false;
  }
}
