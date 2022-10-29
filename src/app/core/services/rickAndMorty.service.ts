import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {

  constructor(private httpClient: HttpClient) {}

  getCharacterRickAndMorty(page: string = '1'): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
    return this.httpClient.get(
      `${environment.rickyAndMortyApi.baseUrl}${environment.rickyAndMortyApi.caharacterMovies}`,
      { params: params }
    );
  }

  getMovieById(idMovie: string): Observable<any> {
    return this.httpClient.get(
      `${environment.theMovieApi.baseUrl}${environment.theMovieApi.getMovie}${idMovie}?api_key=${environment.theMovieApi.apiKey}&language=es-ES`
    );
  }
    getActorMovieById(idMovie: string): Observable<any> {
    return this.httpClient.get(
      `${environment.theMovieApi.baseUrl}${environment.theMovieApi.getMovie}${idMovie}${environment.theMovieApi.getActorMovie}?api_key=${environment.theMovieApi.apiKey}&language=es-ES`
    );
  }
}
