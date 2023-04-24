import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../service/wishlist.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  CartProduct: any[] = []
  total: any = 0
  success: boolean = false
  constructor(private service: WishlistService) { }

  ngOnInit(): void {
    this.getCartProduct()
  }
  // ******** get Cart Product ******
  getCartProduct() {
    if ("theCart" in localStorage) {
      this.CartProduct = JSON.parse(localStorage.getItem("theCart")!)
    }
    this.getCartTotal()
  }
  // ******** count total price ******
  getCartTotal() {
    this.total = 0
    for (let x in this.CartProduct) {
      this.total += this.CartProduct[x].item.price * this.CartProduct[x].quantity;
    }
  }
  // ******** count mins Amount ******
  minsAmount(index: number) {
    this.CartProduct[index].quantity--
    this.getCartTotal()
    localStorage.setItem("theCart", JSON.stringify(this.CartProduct))
  }
  // ******** count add Amount ******
  addAmount(index: number) {
    this.CartProduct[index].quantity++
    this.getCartTotal()
    localStorage.setItem("theCart", JSON.stringify(this.CartProduct))
  }
  // ******** detect Change ******
  detectChange() {
    localStorage.setItem("theCart", JSON.stringify(this.CartProduct))
  }
  // ******** detect Change ******
  deletItem(index: number) {
    this.CartProduct.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(this.CartProduct))
  }

}
