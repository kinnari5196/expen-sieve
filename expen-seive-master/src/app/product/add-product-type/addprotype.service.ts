import { Injectable } from '@angular/core';
import { productTypeDropdown } from '../add-product/product_type_class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AddprotypeService {

  private url2: string= "http://localhost:3000/producttype/";

  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  addProducttype(item)
{
    let body = JSON.stringify(item);
    return this._http.post(this.url2, body, { headers: new HttpHeaders().set(this.content, this.header) });
}
}
