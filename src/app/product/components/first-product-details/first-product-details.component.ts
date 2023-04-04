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
  loading :boolean =false
  addbtn:boolean=false
  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.id = this.route.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.getProductDetailsById()
  }
getProductDetailsById(){
  this.loading=true
  return this.service.getProductById(this.id).subscribe((res:any)=>{
    this.loading=false
    this.data = res
  })
}
}
