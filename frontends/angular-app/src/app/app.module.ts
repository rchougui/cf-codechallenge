import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotosgridComponent } from './components/photosgrid/photosgrid.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';

@NgModule({
  declarations: [AppComponent, PhotosgridComponent, SearchboxComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
