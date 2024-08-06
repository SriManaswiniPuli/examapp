import { Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductlistComponent,
      },
      {
        path:'productdetails/:id',
        component:ProductdetailsComponent
      },
      {
        path:'cart/:id',
        component:CartComponent
      },
      
];
