import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product.service";


export interface Product {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image: string;
  rating?: number;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public products!: Product[];
  loading: boolean = true;

  getProducts() {
    return this.products;
  }

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((productsList: Product[]) => {
      this.products = productsList;
    });
    this.loading = false;
  }


  isBuyingDisabled(status: string) {
    status = status.toLowerCase();
    return (status === 'outofstock') || (status === 'expected')
  }

}

//[{
//     id: '2',
//     name: 'lolname',
//     description: 'very intresting desc',
//     price: 2343,
//     quantity: 3243,
//     inventoryStatus: 'OUTOFSTOCK',
//     category: 'accessories',
//     image: 'dfsdf',
//     rating: 3,
//     voices: 100
//   }, {
//     id: '3',
//     name: 'dsffsd',
//     description: 'very intresting desc',
//     price: 2343,
//     quantity: 3243,
//     inventoryStatus: 'LOWSTOCK',
//     category: 'accessories',
//     image: 'dfsdf',
//     rating: 3,
//     voices: 100
//   }, {
//     id: '3',
//     name: 'sdffds',
//     description: 'very intresting desc',
//     price: 2343,
//     quantity: 3243,
//     inventoryStatus: 'INSTOCK',
//     category: 'accessories',
//     image: 'dfsdf',
//     rating: 3,
//     voices: 100
//   }, {
//     id: '3',
//     name: 'sdffds',
//     description: 'very intresting desc',
//     price: 2343,
//     quantity: 3243,
//     inventoryStatus: 'EXPECTED',
//     category: 'accessories',
//     image: 'dfsdf',
//     rating: 3,
//     voices: 100
//   }];
