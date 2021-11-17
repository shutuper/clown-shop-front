import { Component, OnInit } from '@angular/core';
import {Product} from "../items/items.component";



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  product!: Product;

  constructor() { }

  ngOnInit(): void {
    console.log("lol")
  }

}
