import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmData, IFilmData } from './model/home.types';
import { HomeService } from './services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  //carouselCustomization
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<img src="/assets/icons/left-arrow.png" alt="Retroceder item no carrosel">', '<img src="assets/icons/right-arrow.png" alt="Avançar item no carrosel">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  subs: Subscription[] = [];
  films: FilmData[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getFilmsData();
  }

  getFilmsData() {
    this.subs.push(
      this.homeService.getFilmsData()
        .subscribe(this.filmsDataHandler.bind(this))
    )
  }

  filmsDataHandler(data: IFilmData[]) {
    this.films = data.map((item) => new FilmData(item));
  }

  ngOnDestroy(): void {
    this.subs.map((sub: Subscription) => sub.unsubscribe())
  }

}
