import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private baseUrl:string="https://fakestoreapi.com/";
  constructor(
    private http:HttpClient
  ) { }

  
  getAllProductsWithLimit(limit:number=5){
    const productUrl = `${this.baseUrl}products?limit=${limit}`;
    console.log(productUrl);
    return this.http.get<ProductRepresentation[]>(productUrl);
  }

  createProduct(product:ProductRepresentation){
    const productUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productUrl,product);
  }

}
