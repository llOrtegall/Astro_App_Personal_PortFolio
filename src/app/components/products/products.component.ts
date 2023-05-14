import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'
import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppinCard: Product[] = [];
  total: number = 0;
  today = new Date();
  date = new Date(2023, 5, 13)

  products: Product[] = [];

  constructor(
    private StoreService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppinCard = this.StoreService.getShoppinCard();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      // console.log(data)
      this.products = data;
    });
  }

  onAddToShoppinCard(product: Product) {
    this.StoreService.addProduct(product)
    this.total = this.StoreService.getTotal();
  }
}
