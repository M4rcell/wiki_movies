import { Component, OnInit } from '@angular/core';
import { RickyMortyModel } from '../core/models/rick.morty.model';
import { RickAndMortyService } from '../core/services/rickAndMorty.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss'],
})
export class RickMortyComponent implements OnInit {
  constructor(private rickAndMortyService: RickAndMortyService) {}
  
  loader:boolean= true
  currentPage: number = 1;
  ricyMorty: RickyMortyModel[] = [];
  image= 'https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg'

  ngOnInit(): void {
    this.getCharacterRickAndMorty();
  }

  getCharacterRickAndMorty(direction: string = '') {
    if (this.currentPage > 1 && direction === 'back') {
      this.currentPage = this.currentPage - 1;
    }
    if (this.currentPage < 500 && direction === 'forward') {
      this.currentPage = this.currentPage + 1;
    }
    this.rickAndMortyService
      .getCharacterRickAndMorty(this.currentPage.toString())
      .subscribe({
        next: (response) => {
          this.ricyMorty = response.results;
          this.loader=false
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
