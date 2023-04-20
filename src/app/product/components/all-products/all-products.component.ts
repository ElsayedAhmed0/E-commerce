
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  listProduct: any[] = []
  secProduct: any[] = []
  wishlistProduct: any[] = []
  loading: boolean = false
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getTheData()
    this.getTheSecProduct()
  }
  getTheData() {
    this.loading = true
    this.service.getAllData().subscribe((res: any) => {
      this.loading = false
      this.listProduct = res
    })
  }
  getTheSecProduct() {
    this.loading = true
    this.service.getSecProduct().subscribe((res: any) => {
      this.loading = false
      this.secProduct = res
    })
  }
  addToWishlist(event: any) {
    if ("cart" in localStorage) {
      this.wishlistProduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.wishlistProduct.find(item => item.id == event.id)
      if (exist) {
        alert("this items already i dart")
      } else {
        this.wishlistProduct.push(event)
        localStorage.setItem("cart", JSON.stringify(this.wishlistProduct))
      }
    } else {
      this.wishlistProduct.push(event)
      localStorage.setItem("cart", JSON.stringify(this.wishlistProduct))
    }
  }
}
