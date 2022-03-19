import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingpeople:any[] = [];
  imgPrefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('person').subscribe( (data) => {
      this.trendingpeople=data.results;
    })
   }

  ngOnInit(): void {
  }

}
