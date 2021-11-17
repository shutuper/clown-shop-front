import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'clown-shop-front';
  showHeader: boolean = true;

  ngOnInit() {

  }


  constructor(private primengConfig: PrimeNGConfig) {
  }
}
