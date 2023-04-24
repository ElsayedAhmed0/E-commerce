import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-sec-product-details',
  templateUrl: './sec-product-details.component.html',
  styleUrls: ['./sec-product-details.component.css']
})
export class SecProductDetailsComponent implements OnInit {
  id: any
  data: any = {}
  loading: boolean = false
  addbtn: boolean = false
  CartProduct: any[] = []
  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getsecProductDetailsById()
  }
  getsecProductDetailsById() {
    return this.service.getSecProductById(this.id).subscribe((res: any) => {
      console.log(res);

      this.data = res
    })
  }
  addSecToCart(data: any) {
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
