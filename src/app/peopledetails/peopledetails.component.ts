import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent implements OnInit {
  id:string='';
  personDetails:any;
  imgPrefix:string='https://image.tmdb.org/t/p/w500/';
constructor(private _MoviesService:MoviesService , private _ActivatedRoute:ActivatedRoute ) {
  this.id =_ActivatedRoute.snapshot.params.id;
  _MoviesService.personDetails(this.id).subscribe( (response)=>{
    this.personDetails=response;
  })
 }
 
  ngOnInit(): void {
  }

}
