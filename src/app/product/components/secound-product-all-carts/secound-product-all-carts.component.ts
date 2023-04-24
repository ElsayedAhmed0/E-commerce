import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-secound-product-all-carts',
  templateUrl: './secound-product-all-carts.component.html',
  styleUrls: ['./secound-product-all-carts.component.css']
})
export class SecoundProductAllCartsComponent implements OnInit {
  secProduct:any[]=[]
  wishlistProduct:any[]=[]
  loading: boolean = false
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this. getTheSecProduct()
  }
  getTheSecProduct(){
    this.loading=true
    this.service.getSecProduct().subscribe((res:any)=>{
      this.loading=false
      console.log(res);

      this.secProduct=res
    })
  }
  addToWishlist(event: any) {
    if ("cart" in localStorage) {
      this.wishlistProduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.wishlistProduct.find(item => item.id == event.id && item.title == event.title)
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
