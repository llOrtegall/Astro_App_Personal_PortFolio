import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service' 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;

  constructor(private storeServices: StoreService) {

  }

  ngOnInit(): void {
    this.storeServices.myCard$.subscribe(products => {
      this.counter = products.length;
      console.log(this.counter);
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
