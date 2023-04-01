import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './product/components/all-products/all-products.component';
import { FirstProductAllcartsComponent } from './product/components/first-product-allcarts/first-product-allcarts.component';
import { FirstProductDetailsComponent } from './product/components/first-product-details/first-product-details.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

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
    path: "details/:id",
    component: FirstProductDetailsComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
