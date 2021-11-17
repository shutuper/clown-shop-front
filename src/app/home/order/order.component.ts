import {Component, Injectable, OnInit} from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import {Product} from "../items/items.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderComponent} from "../../header/header.component";
import {MessageService} from "primeng/api";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],

})
@Injectable({
  providedIn: 'root'
})
export class OrderComponent implements OnInit {

  product: Product = {
    image: 'https://www.svgrepo.com/show/86025/delivery-package.svg'
  };
  productId: number = -1;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {

  }

  ngOnInit(): void {
    if (!HeaderComponent.login) {
      localStorage.setItem('url', this.router.url);
      this.router.navigateByUrl('/login');
      return;
    }
    this.productId = +this.route.snapshot.params['id'];
    console.log(this.productId);
    this.productService.getProductById(this.productId).subscribe((product: Product) => {
        this.product = product;
      },
      () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'Product is not found!'});
        setTimeout(() => this.router.navigateByUrl('/'), 3000);
      })
  }

  public sassa() {

  }

  makeOrder(form: NgForm) {
    let order = form.value;
    order.productId = this.productId;
    console.log(order);
    this.productService.makeOrder(order).subscribe(() => {
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'Check your email!'});
      setTimeout(() => this.router.navigateByUrl('/'), 3000);
    }, () => {
      this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'Order is not correct!'});
      setTimeout(() => this.router.navigateByUrl('/'), 3000);
    });
  }

}
