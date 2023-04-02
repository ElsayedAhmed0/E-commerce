import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAllData() {
    return this.http.get(environment.firtsApi + 'products')
  }

  getProductById(id: any) {
    return this.http.get(environment.firtsApi + 'products' + id)
  }

  getAllCategorys(){
    return this.http.get(environment.firtsApi+ 'products/categories')
  }

  getProdctsByCategory(keyword:string){
    return this.http.get(environment.firtsApi + 'products/category/'+keyword)
  }

  getSecProduct(){
    return this.http.get(environment.secsApi + 'products')
  }
}

