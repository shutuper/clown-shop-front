import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";

export interface User {
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin: boolean = false;
  isLoggedInUrl: string = "/api/v1/auth/isLoggedIn";
  logoutUrl: string = "/api/v1/logout";
  authFormHeader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  logOut() {
    return this.httpClient.get(this.logoutUrl);
  }

  isLoggedIn() {
    return this.httpClient.get(this.isLoggedInUrl);
  }


  login(email: string, password: string) {
    let body = new HttpParams();
    body = body.set('email', email);
    body = body.set('password', password);
    return this.httpClient.post('/api/v1/login', body, {
      headers: this.authFormHeader, observe: 'response'
    });
  }

  registrate(email: string, password: string) {
    let body = new HttpParams();
    body = body.set('email', email);
    body = body.set('password', password);
    return this.httpClient.post<User>('/api/v1/registration', body, {
      headers: this.authFormHeader,
      observe: 'response'
    });
  }

}
