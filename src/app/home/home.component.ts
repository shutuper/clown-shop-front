import {Component, OnInit, ViewChildren} from '@angular/core';
import {OrderComponent} from "./order/order.component";
import {CookieService} from "ngx-cookie-service";
import {LanguageService} from "../services/language.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: string[] = ['make an order', '1 day processing', '1 day "bookmark"', 'look for it!']
  lang: string = 'Bread';

  constructor(private order: OrderComponent,
              private cookieService: CookieService,
              private languageService: LanguageService,
              ) {
  }

  ngOnInit(): void {
    if (this.cookieService.check('lang')) {
      this.lang = this.cookieService.get('lang');
    }
    console.log(this.cookieService.getAll());
  }

  changeLang(lang: string) {
    this.cookieService.delete('lang');
    this.languageService.changeLang(lang).subscribe(() => {
      console.log("Language");
    });
    console.log(this.cookieService.getAll());
    window.location.reload();

  }

}
