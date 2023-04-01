import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-first-product-allcarts',
  templateUrl: './first-product-allcarts.component.html',
  styleUrls: ['./first-product-allcarts.component.css']
})
export class FirstProductAllcartsComponent implements OnInit {
  listProduct: any[] = []
  categorys: any[] = []
  filterPro: any[] = []
  loading: boolean = false
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getTheData()
    this.getAllCategorys()
  }
  getTheData() {
    this.loading = true
    this.service.getAllData().subscribe((res: any) => {
      this.loading = false
      console.log(res);
      this.listProduct = res
    })
  }

  getAllCategorys() {
    this.loading = true
    this.service.getAllCategorys().subscribe((res: any) => {
      this.loading = false
      this.categorys = res
    })
  }

  filterCategory(event: any) {

    let value = event.target.value;
    (value == "All") ? this.getTheData() : this.getProCategory(value)

  }

  getProCategory(keyword: string) {
    this.loading = true
    this.service.getProdctsByCategory(keyword).subscribe((proCat: any) => {
      this.loading = false
      this.listProduct = proCat
    })
  }

}
