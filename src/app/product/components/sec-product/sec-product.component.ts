import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-product',
  templateUrl: './sec-product.component.html',
  styleUrls: ['./sec-product.component.css']
})
export class SecProductComponent implements OnInit {
@Input() data:any ={}
  constructor() { }

  ngOnInit(): void {
  }

}
