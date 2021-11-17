import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {observable} from "rxjs";


export interface Message {
  message: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class SmpMessageService {

  constructor(private httpClient: HttpClient) {
  }

  getMessage(echo: string) {
    return this.httpClient.get<Message>(`/api/shop/${echo}`);
  }


  postMessage(message: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Message>('/api/shop/mes', {'message': message}, httpOptions);
  }

  auth(email: string, password: string) {
    let httpOptions = {
      params: new HttpParams().set('email', email).append('password', password)
    };
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('email', email);
    body = body.set('password', password);
    return this.httpClient.post('/api/login', body, {headers: myheader, observe: 'response'});
  }
}
