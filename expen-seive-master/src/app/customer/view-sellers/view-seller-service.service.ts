import { edit_seller } from './../edit-seller/edit-seller-class';
import { seller } from './seller_class';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Addproduct } from '../add-product/product_class';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ViewSellerServiceService {

  private url: string = "http://localhost:3000/seller/";
  private url1:string="http://localhost:3000/selleradd/";


  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  getAllCustomer_seller()
  {
    return this._http.get<seller>(this.url);
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
    return this._http.get<edit_seller[]>(this.url+id);
  }

}
