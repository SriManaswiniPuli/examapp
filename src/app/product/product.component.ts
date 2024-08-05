import { Component,Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatIcon, MatCardModule,RouterLink],
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
  show=true;
     info(){
      this.show=!this.show;
     }
}
