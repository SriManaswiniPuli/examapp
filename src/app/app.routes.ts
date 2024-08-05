import { Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductlistComponent,
      },
      {
        path:'productdetails/:id',
        component:ProductdetailsComponent
      },
      
];
