import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './product/components/all-products/all-products.component';
import { FirstProductAllcartsComponent } from './product/components/first-product-allcarts/first-product-allcarts.component';
import { FirstProductDetailsComponent } from './product/components/first-product-details/first-product-details.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SecProductDetailsComponent } from './product/components/sec-product-details/sec-product-details.component';
import { SecoundProductAllCartsComponent } from './product/components/secound-product-all-carts/secound-product-all-carts.component';
import { WishlistComponent } from './wishlist/components/wishlist/wishlist.component';
import { CartsComponent } from './wishlist/components/carts/carts.component';

const routes: Routes = [
  {
    path: "products",
    component: AllProductsComponent
  },
  {
    path: "first-all-products",
    component: FirstProductAllcartsComponent
  },
  {
    path: "secound-all-products",
    component: SecoundProductAllCartsComponent
  },
  {
    path: "details/:id",
    component: FirstProductDetailsComponent
  },
  {
    path: "secdetails/:id",
    component: SecProductDetailsComponent
  },
  {
    path: "wishlist",
    component: WishlistComponent
  },
  {
    path: "cart",
    component:CartsComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
