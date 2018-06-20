import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { phone_no_class } from './phone_no_class';
import { Subscription } from 'rxjs/Rx';
import {  EditPhoneNoserviceService } from './edit-phone-noservice.service';


@Component({
  selector: 'app-edit-phone-no',
  templateUrl: './edit-phone-no.component.html',
  styleUrls: ['./edit-phone-no.component.scss']
})
export class EditPhoneNoComponent implements OnInit {



  public _subscription:Subscription;

  phone_id:number;
  public phone_no1:string;
  public phone_no2:string;

  constructor(private data1:EditPhoneNoserviceService,public _router:Router,public _activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
    this.phone_id=para["phone_id"];
    console.log(this.phone_id);
   
}
);

this.data1.getPhonenobyid(this.phone_id).subscribe(
  (data:phone_no_class[])=>{
    this.phone_id=data[0].phone_id;
    this.phone_no1=data[0].phone_no1;
    this.phone_no2=data[0].phone_no2;

  }
);
  }
  onUpdate(){
  
    let driver=new phone_no_class(null,this.phone_no1,this.phone_no2);
    this.data1.updatePhoneno(this.phone_id,driver).subscribe(
      ()=>{
        this._router.navigate(['/customer-manager']);
       
      }
    );
  }

}
