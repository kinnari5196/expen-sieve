import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { get_all_ac_grp } from './getallaccountgrp_class';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class GetaccountgrpService {

  private url: string = "http://localhost:3000/acgroup/";

  constructor(public _http: HttpClient) { }

  getAllGroup()
  {
    return this._http.get<get_all_ac_grp>(this.url);
  }

}
