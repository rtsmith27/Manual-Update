import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
  declarations: [
    ResultListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ResultListComponent]
})
export class AppModule { }
