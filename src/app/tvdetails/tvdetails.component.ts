import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {
id:string='';
tvDetails:any;
imgPrefix:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService , private _ActivatedRoute:ActivatedRoute) {
    this.id=_ActivatedRoute.snapshot.params.id;
    _MoviesService.tvDetails(this.id).subscribe( (data)=>{
      this.tvDetails=data;
    })
   }

  ngOnInit(): void {
  }

}
