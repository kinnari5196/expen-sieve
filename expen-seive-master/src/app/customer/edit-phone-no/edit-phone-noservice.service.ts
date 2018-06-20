import { Injectable } from '@angular/core';
import { phone_no_class } from './phone_no_class';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EditPhoneNoserviceService {

  private url: string = "http://localhost:3000/phoneno/";

  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  updatePhoneno(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }

  getPhonenobyid(id:number)
  {
    return this._http.get<phone_no_class[]>(this.url+id);
  }


}
