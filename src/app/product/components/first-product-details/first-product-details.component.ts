import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-first-product-details',
  templateUrl: './first-product-details.component.html',
  styleUrls: ['./first-product-details.component.css']
})
export class FirstProductDetailsComponent implements OnInit {
  id: any
  data: any = {}
  loading: boolean = false
  addbtn: boolean = false
  CartProduct: any[] = []
  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getProductDetailsById()
  }
  getProductDetailsById() {
    this.loading = true
    return this.service.getProductById(this.id).subscribe((res: any) => {
      this.loading = false
      this.data = res
    })
  }
  addToCart(data: any) {
    if ("theCart" in localStorage) {
      this.CartProduct = JSON.parse(localStorage.getItem("theCart")!)
      let filalCart = this.CartProduct.find(item => item.id == data.id && item.title == data.title)
      if (filalCart) {
        alert("this items already i dart")
      } else {
        this.CartProduct.push(data)
        localStorage.setItem("theCart", JSON.stringify(this.CartProduct))
      }
    } else {
      this.CartProduct.push(data)
      localStorage.setItem("theCart", JSON.stringify(this.CartProduct))
    }

  }
}
