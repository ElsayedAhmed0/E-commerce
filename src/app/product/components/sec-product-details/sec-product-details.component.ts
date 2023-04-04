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
}
