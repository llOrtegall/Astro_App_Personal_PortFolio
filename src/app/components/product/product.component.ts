import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    title: '',
    description: '',
    price: 0,
    img: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart (){
    this.addedProduct.emit(this.product);
  }

}