import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  videosDetails(videos: boolean) {
    throw new Error('Method not implemented.');
  }

  constructor(private _HttpClient:HttpClient) { }

  getTrending(moviesType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${moviesType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
  }
  moviesDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`);
  }
  tvDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  personDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
}
