import { Component } from '@angular/core';

import { ProductComponent } from '../product/product.component';
import { ProductService } from '../productservice.service';
import {Iproduct}  from '../app.component';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
  productlist: Array<Iproduct> = [];

  product:any;

  constructor(private productService: ProductService){
    //this.bookslist = this.booksService.getbookslist()
   }

   ngOnInit(){
    this.productService.getallproductsP().then((data: Iproduct[])=>{
     this.productlist=data;
    })
 }
}
