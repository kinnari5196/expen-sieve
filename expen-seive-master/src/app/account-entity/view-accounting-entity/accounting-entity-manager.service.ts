import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { accounting_entity_manager } from './accounting_entity_manager';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AccountingEntityManagerService {
  private url: string = "http://localhost:3000/acmaster/";
  private url1: string = "http://localhost:3000/acentity/";
  private url2: string = "http://localhost:3000/acentityadd/";
  
  constructor(public _http: HttpClient) { }
 content: string = "Content-Type";
  header: string = "application/json";

  getAllMaster()
  {
    return this._http.get<accounting_entity_manager>(this.url);
  }

  updateEntity(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url1 + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }
  deleteEntity(id:number){
    return this._http.delete(this.url1+id,{headers:new HttpHeaders().set(this.content,this.header)});
  }
  addCustomer_seller(item) {
    
    let body = JSON.stringify(item);
    return this._http.post(this.url2, body, { headers: new HttpHeaders().set(this.content, this.header) });
}

  
}
