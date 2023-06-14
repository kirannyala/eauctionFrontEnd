import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import { SelectProduct,ProductBuyerBids } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  constructor(private http:HttpClient) { }
  
  getproducts() {
  return this.http.get<SelectProduct[]>('http://localhost:9191/api/v1/seller/products');
 }

 getProductBids(prodId : any){
  return this.http.get<ProductBuyerBids>('http://localhost:9191/api/v1/seller/show-bids/'+prodId);

 }
 
}
