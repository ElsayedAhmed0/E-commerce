import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistProduct:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.getWishlistProduct()
  }
  getWishlistProduct() {
    if ("cart" in localStorage) {
      this.wishlistProduct = JSON.parse(localStorage.getItem("cart")!)
    }
    console.log(this.wishlistProduct);

  }
}
