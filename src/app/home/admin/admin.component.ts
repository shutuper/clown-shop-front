import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import {Product} from "../items/items.component";
import {MessageService} from "primeng/api";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products!: Product[];
  stateOptions = [{label: 'Off', value: false}, {label: 'On', value: true}];

  inventoryStatuses: { name: string, value: string }[] = [
    {name: 'IN STOCK', value: 'INSTOCK'},
    {name: 'OUT OF  STOCK', value: 'OUTOFSTOCK'},
    {name: 'EXPECTED', value: 'EXPECTED'},
    {name: 'LOW STOCK', value: 'LOWSTOCK'}]

  inventory: { name: string, value: string } = {name: 'IN STOCK', value: 'INSTOCK'};


  constructor(private productService: ProductService, private messageService: MessageService) {

  }

  deleteProduct(form: NgForm) {
    let id = form.value.deleteId;
    this.productService.delete(id).subscribe(() => {
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'Product deleted!'});
      form.reset();
    }, () => {
      this.messageService.add({severity: 'error', summary: 'Failed', detail: 'Product is not deleted!'});
    });

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((allProducts: Product[]) => this.products = allProducts);
  }

  saveProduct(form: NgForm) {
    let product = form.value;
    this.productService.save(product).subscribe(() => {
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'Product saved!'});
      form.reset();
    }, () => {
      this.messageService.add({severity: 'error', summary: 'Failed', detail: 'Product is not saved!'});
    })
  }
}
