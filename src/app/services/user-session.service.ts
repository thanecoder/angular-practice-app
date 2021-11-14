import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { constants } from 'src/environments/app_constants';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  public httpOptions;

  constructor(private http:HttpClient) {
    this.httpOptions= {headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};
  }

  login(reqObj){
    return this.http.post(environment.API_URL+constants.LOGIN, reqObj,this.httpOptions).pipe(
      catchError(error => this.handleError(error))
    );
  }

  signUp(reqObj){
    return this.http.post(environment.API_URL+constants.SIGN_UP, reqObj,this.httpOptions).pipe(
      catchError(error => this.handleError(error))
    );
  }

  getAuthorizationToken(){
    return localStorage.getItem('sessionToken');
  }

  // extractDataForSession(value: any){
  //   let res = {};
  //   res = value;
  //   return res;
  // }

  handleError(error: any): any {
    console.log('error',error);
  }
}
