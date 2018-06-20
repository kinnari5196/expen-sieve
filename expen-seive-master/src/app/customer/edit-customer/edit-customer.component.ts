import { ViewCustomersComponent } from './../view-customers/view-customers.component';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { edit_customer } from './edit-customer-class';
import { Subscription } from 'rxjs/Rx';
import { ViewCustomerServiceService  } from '../view-customers/view-customer-service.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  public _subscription:Subscription;
  cs_id:number;
  public name:string;
  public addressline:string;
  public fk_pincode:number;
  public fk_phone_id:number;
  public gst_no:string;
  public fk_business_id:number;
  public editcustomer: edit_customer[] = [];


  constructor(private data1:ViewCustomerServiceService,public _router:Router,public _activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
    this.cs_id=para["cs_id"];
    console.log(this.cs_id);
   }
);

this.data1.getCustomer_sellerbyid(this.cs_id).subscribe(
  (data:edit_customer[])=>{
    this.cs_id=data[0].cs_id;
    this.name=data[0].name;
    this.addressline=data[0].addressline;
    this.fk_pincode=data[0].fk_pincode;
    this.fk_phone_id=data[0].fk_phone_id;
    this.gst_no=data[0].gst_no;
    this.fk_business_id=data[0].fk_business_id;
  }
);

  }

  onUpdate(){ 
  
    let driver=new edit_customer(null,this.name,this.addressline,this.fk_pincode,this.fk_phone_id,this.gst_no,this.fk_business_id);
    this.data1.updateCustomer_seller(this.cs_id,driver).subscribe(
      ()=>{
        this._router.navigate(['/customer-manager']);
       
      }
    );
  }

}
