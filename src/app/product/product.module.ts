import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { FirstProductComponent } from './components/first-product/first-product.component';
import { SecProductComponent } from './components/sec-product/sec-product.component';
import { FirstProductDetailsComponent } from './components/first-product-details/first-product-details.component';
import { SecProductDetailsComponent } from './components/sec-product-details/sec-product-details.component';
import { SharedModule } from '../shared/shared.module';
import { BunnerComponent } from './components/bunner/bunner.component';

@NgModule({
  declarations: [
    AllProductsComponent,
    FirstProductComponent,
    SecProductComponent,
    FirstProductDetailsComponent,
    SecProductDetailsComponent,
    BunnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  // exports:[
  //   AllProductsComponent
  // ]
})
export class ProductModule { }
