import { edit_customer } from './../edit-customer/edit-customer-class';
import { customer } from './customer_class';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ViewCustomerServiceService {

  private url: string = "http://localhost:3000/customer/";
  private url1:string="http://localhost:3000/customeradd/";

  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  getAllCustomer_seller()
  {
    return this._http.get<customer>(this.url);

  }
  addCustomer_seller(item) {
    
    let body = JSON.stringify(item);
    return this._http.post(this.url1, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }
  updateCustomer_seller(id, item) {
    
  let body = JSON.stringify(item);
  return this._http.put(this.url + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }
  
  getCustomer_sellerbyid(id:number)
  {
    return this._http.get<edit_customer[]>(this.url+id);
  }

}
