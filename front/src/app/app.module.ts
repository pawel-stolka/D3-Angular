import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { D3Service } from 'd3-ng2-service';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { Testd3Component } from './testd3/testd3.component'
import { D3FirstComponent } from './d3-first/d3-first.component';
import { D3SecComponent } from './d3-sec/d3-sec.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'd3-first', component: D3FirstComponent },
  { path: 'd3-sec', component: D3SecComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    Testd3Component,
    D3FirstComponent,
    D3SecComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [D3Service, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
