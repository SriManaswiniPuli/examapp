import { Component } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../productservice.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Iproduct } from '../app.component';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [ProductlistComponent,ProductComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent {
  productlist!: Iproduct;
  isLoading: boolean = true;
  msg = '';

 
  constructor(
    private productservice: ProductService,
    private route: ActivatedRoute, // DI
    private router: Router
  ) {}
 
  // After Initialization of the component
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL
    this.productservice
      .getProductById(id)
      .then((data) => {
        this.productlist = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong';
      });
}
}
