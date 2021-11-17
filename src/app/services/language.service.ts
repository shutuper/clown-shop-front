import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  allLangs = ['ru', 'fr', 'ua', 'de', 'en'];
  langUrl = '/api/v1/languages/';

  constructor(private httpClient: HttpClient) {
  }

  changeLang(lang: string) {
    if (!this.allLangs.includes(lang)) {
      throw new Error("Incorrect language");
    } else {
      return this.httpClient.get(`${this.langUrl}${lang}`, {withCredentials: true, observe: 'response'});
    }
  }
}
