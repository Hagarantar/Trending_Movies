import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  trendingTv:any[] = [];
  imgPrefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('tv').subscribe( (data) => {
      this.trendingTv=data.results;
});
   }

  ngOnInit(): void {
  }

}
