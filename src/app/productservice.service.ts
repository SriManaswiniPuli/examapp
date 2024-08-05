import { Injectable } from '@angular/core';
import { Iproduct} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productlist: Array<Iproduct> = [
  ]
  constructor() { }

  getproductlist() {
    return this.productlist;
  }

  getallproductsP(){
    return fetch('https://66b0ad8a6a693a95b539bd95.mockapi.io/ecommerce').then(
      (res)=>res.json()
    )
  }
}
