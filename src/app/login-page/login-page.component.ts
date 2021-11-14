import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserSessionService } from '../services/user-session.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public flagShowSignUpScreen:boolean = false;
  public emailAddress:string = '';
  public username:string = '';
  public password:string = '';
  @Output() loginEvent = new EventEmitter();

  constructor(private sessionService:UserSessionService) { }

  ngOnInit(): void {
  }

  validateLoginInput(){
    let reqObj = {
      email:this.emailAddress,
      password:this.password
    }
    this.sessionService.login(reqObj).subscribe(
      (result:any)=>{
        console.log('result',result);
        localStorage.setItem('sessionToken',result.token);
        this.loginEvent.emit();
      }
    )
  }

  showSignUpScreen(){
    this.flagShowSignUpScreen = true;
  }

  signUpUser(){
    let reqObj = {
      email:this.emailAddress,
      password:this.password,
      userName:this.username
    }
    this.sessionService.signUp(reqObj).subscribe(
      (result:any)=>{
        localStorage.setItem('sessionToken',result.token);
        this.loginEvent.emit();
      }
    )
  }

}
