import { Component } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [
    {
      id: 4,
      title: 'Change title',
      price: 324,
      description: 'good',
      img: 'https://picsum.photos/640/640?r=9702',
    },
    {
      id: 7,
      title: 'Licensed Granite Mouse',
      price: 106,
      description:
        'The Football Is Good For Training And Recreational Purposes',
      img: 'https://picsum.photos/640/640?r=6957',
    },
    {
      id: 8,
      title: 'Generic Metal Mouse',
      price: 577,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      img: 'https://picsum.photos/640/640?r=5330',
    },
    {
      id: 9,
      title: 'Sleek Frozen Computer',
      price: 93,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      img: 'https://picsum.photos/640/640?r=8606',
    },
    {
      id: 10,
      title: 'Change title',
      price: 100,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      img: 'https://picsum.photos/640/640?r=9702',
    },
    {
      id: 11,
      title: 'Recycled Metal Pants',
      price: 476,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      img: 'https://picsum.photos/640/640?r=3488',
    },
    {
      id: 14,
      title: 'Elegant Steel Bacon',
      price: 698,
      description:
        'The Football Is Good For Training And Recreational Purposes',
      img: 'https://picsum.photos/640/640?r=1446',
    },
  ];
}
