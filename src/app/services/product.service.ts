import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../home/items/items.component";

export interface Order {
  name: string;
  surname: string;
  phone: string;
  address: string;
  quantity: number;
  productId: number;

}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts() {
    return this.httpClient.get<Product[]>('/api/v1/products');
  }

  getProductById(id: number) {
    return this.httpClient.get<Product>(`/api/v1/products/${id}`);
  }

  makeOrder(order: Order) {
    return this.httpClient.post<Order>('/api/v1/orders', order);
  }

}
