import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { D3Service } from 'd3-ng2-service';
import { Testd3Component } from './testd3/testd3.component'


@NgModule({
  declarations: [
    AppComponent,
    Testd3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
