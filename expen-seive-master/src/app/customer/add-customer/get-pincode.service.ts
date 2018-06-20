import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getPincodeDropdown  } from './get_pincode_class';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetPincodeService {

  private url: string = "http://localhost:3000/address/";
  constructor(public _http: HttpClient) { }

  getAllAdress()
  {
    return this._http.get<getPincodeDropdown>(this.url);
  }
}

