import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


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

  isAdminUrl: string = '/api/v1/admin';

  isAdmin() {
    return this.httpClient.get<Message>(this.isAdminUrl);
  }
}
