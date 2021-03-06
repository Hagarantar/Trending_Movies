import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
     trendingMovies:any[] = [];
     trendingTv:any[] = [];
     trendingpeople:any[] = [];
     imgPrefix:string='https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) { 

       _MoviesService.getTrending('movie').subscribe( (data) => {
           this.trendingMovies=data.results.slice(0,10);
    });
    
    _MoviesService.getTrending('tv').subscribe( (data) => {
      this.trendingTv=data.results.slice(0,10);
});

_MoviesService.getTrending('person').subscribe( (data) => {
  this.trendingpeople=data.results.slice(0,10);
})
  }

  ngOnInit(): void {
  }

}
