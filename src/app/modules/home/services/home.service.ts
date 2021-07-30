import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmData } from '../model/home.types';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getFilmsData(): Observable<any> {
    return this.http.get<FilmData>('assets/FILMES.JSON')
  }

}
