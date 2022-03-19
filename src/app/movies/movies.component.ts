import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
MoviesService
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies:any[] = [];
  imgPrefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('movie').subscribe( (data) => {
      this.trendingMovies=data.results;
});
   }

  ngOnInit(): void {
  }

}
