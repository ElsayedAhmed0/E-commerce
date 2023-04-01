import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-first-product',
  templateUrl: './first-product.component.html',
  styleUrls: ['./first-product.component.css']
})
export class FirstProductComponent implements OnInit {
  @Input() data: any = {}
  // addbtn: boolean = false;
  product: any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
