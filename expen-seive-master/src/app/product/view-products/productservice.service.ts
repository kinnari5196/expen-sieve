import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from './product_class';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class ProductserviceService {

 private url: string = "http://localhost:3000/product/";
private url1: string = "http://localhost:3000/deleteproduct/"

  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  getAllProduct()
  {
    return this._http.get<product>(this.url);
  }

  updateProduct(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }
  deleteProduct(id,item){
    let body = JSON.stringify(item);
    return this._http.put(this.url1 + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }

}
