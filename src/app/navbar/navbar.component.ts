import { Component, OnInit } from '@angular/core';
import { AuhService } from '../auh.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   isLogin:boolean = false;
  constructor(private _AuhService:AuhService) { 
    // if(_AuhService.currentUser != null){
    //     this.isLogin =true;
    // }
    // else{
    //   this.isLogin =false;
    // }
    _AuhService.currentUser.subscribe(()=>{
      if(_AuhService.currentUser.getValue() != null){
             this.isLogin =true;
      }
      else{
        this.isLogin=false;
      }
    })
  }
  isLogout(){
    this._AuhService.logout();
  }

  
  ngOnInit(): void {
  }

}
