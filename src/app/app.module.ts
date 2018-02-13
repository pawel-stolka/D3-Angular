import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { D3Service } from 'd3-ng2-service';
import { Testd3Component } from './testd3/testd3.component'
import { DataService } from './data.service';
import { D3FirstComponent } from './d3-first/d3-first.component';
import { D3SecComponent } from './d3-sec/d3-sec.component';

const appRoutes: Routes = [
  { path: '',      component: AppComponent },
  { path: 'd3-first',      component: D3FirstComponent },
  { path: 'd3-sec',      component: D3SecComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    Testd3Component,
    D3FirstComponent,
    D3SecComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [D3Service, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
