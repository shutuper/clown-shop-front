import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map} from "rxjs";


export interface Message {
  message?: string;
  bool: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  isLoggedIn = false;

  isAdmin() {
    return this.httpClient.get<Message>("/api/v1/products/admin");
  }
}
