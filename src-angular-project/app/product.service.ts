import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Product{
  id:number
  productCategories:String
  productName:String
  price:number
  quantity:number
  
  }

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url="../assets/product.json"
  constructor(private httpClient:HttpClient) { }
  client(){
    return this.httpClient.get<Product[]>(this.url)
   }



}
