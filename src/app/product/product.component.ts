import { Component,Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatIcon, MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product= {
    id: '',
    name: '',
    description:'',
    quantity: '',
    price: '',
    image: ''
  };

  @Input() id!: string;
}
