import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppinCard: Product[] = [];

  constructor() { }

  addProduct(product: Product) {
    this.myShoppinCard.push(product);
  }

  getShoppinCard(){
    return this.myShoppinCard;
  }
  getTotal(){
    return this.myShoppinCard.reduce((sum, item) => sum + item.price, 0)
  }
}
