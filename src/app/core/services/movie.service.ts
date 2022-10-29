import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  getPopularMovies(page: string = '1'): Observable<any> {
    const params = new HttpParams()
      .set('api_key', environment.theMovieApi.apiKey)
      .set('page', page)
      .set('language', 'es-ES');
    return this.httpClient.get(
      `${environment.theMovieApi.baseUrl}${environment.theMovieApi.popularMovies}`,
      { params: params }
    );
  }
//https://api.themoviedb.org/3/movie/436270?api_key=739d88f0ca8909ee15f7310778dcb551&language=es-ES
  getMovieById(idMovie: string): Observable<any> {
    return this.httpClient.get(
      `${environment.theMovieApi.baseUrl}${environment.theMovieApi.getMovie}${idMovie}?api_key=${environment.theMovieApi.apiKey}&language=es-ES`
    );
  }
//https://api.themoviedb.org/3/movie/436270/credits?api_key=739d88f0ca8909ee15f7310778dcb551&langua%20ge=es-ES
  getActorMovieById(idMovie: string): Observable<any> {
    return this.httpClient.get(
      `${environment.theMovieApi.baseUrl}${environment.theMovieApi.getMovie}${idMovie}${environment.theMovieApi.getActorMovie}?api_key=${environment.theMovieApi.apiKey}&language=es-ES`
    );
  }
}
