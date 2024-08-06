import { Component } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { Iproduct } from '../app.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductlistComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  productlist!: Iproduct;

}
