import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sec-product',
  templateUrl: './sec-product.component.html',
  styleUrls: ['./sec-product.component.css']
})
export class SecProductComponent implements OnInit {
@Input() data:any ={}
@Output() item = new EventEmitter
status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  wishListEvent(){
    this.status = !this.status;
}
addToWishlist() {
  this.item.emit(this.data)
}
}
