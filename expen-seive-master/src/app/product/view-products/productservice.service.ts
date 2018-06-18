import { Addproduct } from './../add-product/product_class';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from './product_class';
//import { Addproduct } from '../add-product/product_class';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class ProductserviceService {

 private url: string = "http://localhost:3000/product/";
private url1: string = "http://localhost:3000/deleteproduct/"
//private url2: string= "http://localhost:3000/product/";
  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  getAllProduct()
  {
    return this._http.get<product>(this.url);
  }

  getProductbyid(id:number)
  {
    return this._http.get<product[]>(this.url+id);
  }

  updateProduct(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }
  deleteProduct(id){
   
    return this._http.put(this.url1 + id, { headers: new HttpHeaders().set(this.content, this.header) });

  }
  addProduct(item) {
    
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: new HttpHeaders().set(this.content, this.header) });
}

}
