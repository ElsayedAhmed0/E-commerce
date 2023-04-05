import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-first-product',
  templateUrl: './first-product.component.html',
  styleUrls: ['./first-product.component.css']
})
export class FirstProductComponent implements OnInit {
  @Input() data: any = {}
  @Output() item = new EventEmitter
  status: boolean = false;
  // addbtn: boolean = false;
  product: any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  wishListEvent() {
    this.status = !this.status;
  }
  addToWishlist() {
this.item.emit(this.data)
  }
}
