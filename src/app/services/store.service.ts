import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppinCard: Product[] = [];

  private myCard = new BehaviorSubject<Product[]>([]);
  // TODO: por lo general teminan en signo dollar
  myCard$ = this.myCard.asObservable();

  constructor() { }

  addProduct(product: Product) {
    this.myShoppinCard.push(product);
    // * Ha my shopping Cart traemos o trasmitimos el estado de myshoppin Cart
    this.myCard.next(this.myShoppinCard);
  }

  getShoppinCard() {
    return this.myShoppinCard;
  }
  getTotal() {
    return this.myShoppinCard.reduce((sum, item) => sum + item.price, 0)
  }
}
