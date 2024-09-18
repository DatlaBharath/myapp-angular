import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'

})


// @NgModule({
//   imports: [HttpClientModule],
//   providers: [provideHttpClient()],  
// })

export class ProductService {

  constructor(private http:HttpClient) { }
  saveProduct(prod: Product): Observable<any>{
    let url = "http://localhost:8090/product/create";
    return this.http.post(url,prod)
  }
  deleteProduct(id: number) : Observable<any>{
    let url = "http://localhost:8090/product/delete/"+id;
    return this.http.delete(url)
  }
  getProducts() : Observable<any>{
    let url = "http://localhost:8090/product/fetchall"
    return this.http.get(url)
  }
  updateProduct(prod: Product){
    let url = "http://localhost:8090/product/update";
    return this.http.put(url,prod)
  }
}
