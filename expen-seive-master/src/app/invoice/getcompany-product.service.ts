import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { companyDropdown  } from './company_class';
import { product } from './product_class';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetcompanyProductService {

  private url: string = "http://localhost:3000/company/";
  private url1: string = "http://localhost:3000/product/";
private url3:string="http://localhost:3000/invoice_num_generation/"
  constructor(public _http: HttpClient) { }

  getAllCompany()
  {
    return this._http.get<companyDropdown>(this.url);
  }

  getAllProduct()
  {
    return this._http.get<product>(this.url1);
  }

  Invoice_number_generate()
{
  return this._http.get(this.url3);
}


}
