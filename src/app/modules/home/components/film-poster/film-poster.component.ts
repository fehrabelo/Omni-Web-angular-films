import { Component, Input } from '@angular/core';
import { FilmData } from '../../model/home.types';

@Component({
  selector: 'app-film-poster',
  templateUrl: './film-poster.component.html',
  styleUrls: ['./film-poster.component.scss']
})
export class FilmPosterComponent {
  @Input() filmData: FilmData;
}
