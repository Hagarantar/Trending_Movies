import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuhService } from '../auh.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  error:string ='';

  loginForm:any = new FormGroup({
    email : new FormControl (null , [Validators.email , Validators.required] ),
     password: new FormControl (null , [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,8}$')])
  })
  constructor(private _AuhService:AuhService , private _Router:Router) { }
    

  submitloginForm(loginForm:FormGroup){
     this._AuhService.login(loginForm.value).subscribe((response)=>{
       if(response.message == 'success'){
         localStorage.setItem('userToken' , response.token)
         this._AuhService.saveCurrentUser();
        this._Router.navigate(['/home'])
       }
       else{
          this.error= response.message;
       }
     })
  }
  ngOnInit(): void {
  }

}
