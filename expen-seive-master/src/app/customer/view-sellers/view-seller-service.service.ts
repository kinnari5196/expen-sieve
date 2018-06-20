import { seller } from './seller_class';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Addproduct } from '../add-product/product_class';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ViewSellerServiceService {

  private url: string = "http://localhost:3000/seller/";


  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  getAllCustomer_seller()
  {
    return this._http.get<seller>(this.url);
  }

}
