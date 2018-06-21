import { Injectable } from '@angular/core';
//import { edit_customer } from './../edit-customer/edit-customer-class';
import { view_invoice_class } from './view_invoice_class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class InvoiceServiceService {

  private url: string = "http://localhost:3000/invoice/";

  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  getAllInvoice()
  {
    return this._http.get<view_invoice_class>(this.url);

  }

}
