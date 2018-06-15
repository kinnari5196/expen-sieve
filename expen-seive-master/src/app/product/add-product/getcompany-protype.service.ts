import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { companyDropdown  } from './company_class';
import { productTypeDropdown } from './product_type_class';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class GetcompanyProtypeService {

  private url: string = "http://localhost:3000/company/";
  private url1: string = "http://localhost:3000/producttype/";

  constructor(public _http: HttpClient) { }

  getAllCompany()
  {
    return this._http.get<companyDropdown>(this.url);
  }

  getAllProducttype()
  {
    return this._http.get<productTypeDropdown>(this.url1);
  }
}
