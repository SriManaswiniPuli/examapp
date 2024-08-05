import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

import { ProductlistComponent } from './productlist/productlist.component';



export interface Iproduct{
    id: string,
    name: string,
    description: string,
    quantity:string ,
    price: string,
    image: string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ProductlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examapp';
}
