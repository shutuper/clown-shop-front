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

  allProductUrl: string = "/api/v1/products";
  saveProductUrl: string = "/api/v1/admin/products";
  makeOrderUrl: string = "/api/v1/orders";
  deleteProductURl: string = "/api/v1/admin/products/";

  constructor(private httpClient: HttpClient) {
  }

  save(product: Product) {
    return this.httpClient.post<Product>(this.saveProductUrl, product);
  }

  delete(id: number) {
    return this.httpClient.delete(`${(this.deleteProductURl)}${id}`);
  }

  getAllProducts() {
    return this.httpClient.get<Product[]>(this.allProductUrl);
  }

  getProductById(id: number) {
    return this.httpClient.get<Product>(`${this.allProductUrl}/${id}`);
  }

  makeOrder(order: Order) {
    return this.httpClient.post<Order>(this.makeOrderUrl, order);
  }

}
