import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmPosterComponent } from './components/film-poster/film-poster.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [HomeComponent, FilmPosterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
