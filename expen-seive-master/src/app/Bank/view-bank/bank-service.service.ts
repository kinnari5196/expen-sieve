import { Injectable } from '@angular/core';
import { add_bank_class } from '../add-bank/add_bank_class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Addproduct } from '../add-product/product_class';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class BankServiceService {

  private url: string = "http://localhost:3000/bank/";
  private url1: string = "http://localhost:3000/bankadd/";
  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";

  getAllBank()
  {
    return this._http.get<add_bank_class>(this.url);

  }
  addBank(item) {
    
    let body = JSON.stringify(item);
    return this._http.post(this.url1, body, { headers: new HttpHeaders().set(this.content, this.header) });
}
}
