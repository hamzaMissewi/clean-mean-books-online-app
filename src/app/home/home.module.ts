import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  // declarations: [
  //   BookDetailsComponent
  // ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
