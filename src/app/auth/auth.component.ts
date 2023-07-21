import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  hide = true
  loginForm: FormGroup
  mode = "login"
  LoggedIn = false

  constructor(
    private router: Router,
    private authService : AuthService
  ){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      'username' : new FormControl(null),
      'password' : new FormControl(null)
    })
    this.authService.logger.subscribe(state => {
      this.LoggedIn = state

      if(this.LoggedIn){
        console.log("You are currently logged in")
      }else{
        console.log("You are currently NOT logged in")
      }
    })
      this.LoggedIn = this.authService.isLoggedIn
      if(this.LoggedIn){
        console.log("You are currently logged in")
      }else{
        console.log("You are currently NOT logged in")
      }
  }

  onSubmit(){
    if(this.mode == 'login'){
      console.log('ey')
      let user = new User(this.loginForm.value.username, this.loginForm.value.password)
      this.authService.authCheck(user)
    }
  }
  onChangeMode(){
    if(this.mode == "login"){
      this.mode = "signup"
    }else{
      this.mode = "login"
    }
    console.log(this.mode)
  }
}
