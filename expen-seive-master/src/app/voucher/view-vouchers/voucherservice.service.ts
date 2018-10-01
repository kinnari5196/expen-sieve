import { add_entity_class } from './../../account-entity/add-accounting-entity/addentity_class';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { voucher } from './voucher_class';
import { master } from '../add-voucher/master_class';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { add_seller_class } from '../../customer/add-seller/add_seller_class'
import { add_bank_class } from '../../Bank/add-bank/add_bank_class';
import { add_customer_class } from '../../customer/add-customer/add_customer_class';
import 'rxjs/Rx';
@Injectable()
export class VoucherserviceService {

  private url: string = "http://localhost:3000/voucher/";
 private url1: string = "http://localhost:3000/acmaster/"
 private url2: string= "http://localhost:3000/seller/";
private url3:string="http://localhost:3000/bank/";
private url4:string="http://localhost:3000/customer/";
private url5:string="http://localhost:3000/acentity/";


  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  getAllVoucher()
  {
    return this._http.get<voucher>(this.url);
  }
  getMasterbyid(id:number)
  {
    return this._http.get<master>(this.url1+id);
  }

  getCustomer_sellerbyid(id:number)
  {
    return this._http.get<add_seller_class>(this.url2+id);
  }

  getBankbyid(id:number)
  {
    return this._http.get<add_bank_class>(this.url3+id);
  }

getCustomerbyid(id:number)
{
  return this._http.get<add_customer_class>(this.url4+id);
}
getEntitybyid(id:number)
{
  return this._http.get<add_entity_class>(this.url5+id);
}
addVoucher(item) {
    
  let body = JSON.stringify(item);
  return this._http.post(this.url, body, { headers: new HttpHeaders().set(this.content, this.header) });
}

getAllMaster()
{
  return this._http.get<master>(this.url1);
}


}
