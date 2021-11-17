import {Component, OnInit, ViewChildren} from '@angular/core';
import {OrderComponent} from "./order/order.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: string[] = ['make an order', '1 day processing', '1 day "bookmark"', 'look for it!']

  constructor(private order: OrderComponent) {
  }

  ngOnInit(): void {
    console.log(this.order);
  }

}
