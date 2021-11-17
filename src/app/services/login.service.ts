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

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  logOut() {
    return this.httpClient.get("/api/logout");
  }

  isLoggedIn() {
    return this.httpClient.get("/api/registration/isLoggedIn");
  }

  login(email: string, password: string) {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('email', email);
    body = body.set('password', password);
    return this.httpClient.post('/api/login', body, {headers: myheader, observe: 'response'});
  }

  registrate(email: string, password: string) {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('email', email);
    body = body.set('password', password);
    return this.httpClient.post<User>('/api/registration', body, {headers: myheader, observe: 'response'});
  }

}
