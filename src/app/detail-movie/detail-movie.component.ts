import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ActorModel, MovieModel } from '../core/models/movie.model';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  movie?: MovieModel;
  actors:ActorModel[]=[]
  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe({
      next: (params: Params) => {
        const idMovie: string = params['idMovie'];
        this.getMovieById(idMovie)
        this.getActorsMovieById(idMovie)
      },
    });
  }

  getMovieById(idMovie:string){
    this.movieService.getMovieById(idMovie).subscribe({
      next: (response) => {
        this.movie = response;
      },
    });
  }

  getActorsMovieById(idMovie:string){
    this.movieService.getActorMovieById(idMovie).subscribe({
      next: (response) => {
        this.actors = response.cast;
      },
    });

  }
}
