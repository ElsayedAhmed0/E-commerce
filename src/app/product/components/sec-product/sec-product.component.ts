import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-product',
  templateUrl: './sec-product.component.html',
  styleUrls: ['./sec-product.component.css']
})
export class SecProductComponent implements OnInit {
@Input() data:any ={}
status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  wishListEvent(){
    this.status = !this.status;
}
}
