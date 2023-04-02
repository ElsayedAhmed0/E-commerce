
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  listProduct:any[]=[]
  secProduct:any[]=[]
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
  getTheSecProduct(){
    this.loading=true
    this.service.getSecProduct().subscribe((res:any)=>{
      this.loading=false
      console.log(res);

      this.secProduct=res
    })
  }
}
