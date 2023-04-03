import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-secound-product-all-carts',
  templateUrl: './secound-product-all-carts.component.html',
  styleUrls: ['./secound-product-all-carts.component.css']
})
export class SecoundProductAllCartsComponent implements OnInit {
  secProduct:any[]=[]
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
}
