import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartsComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class WishlistModule { }
