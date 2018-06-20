import { edit_seller } from './edit-seller-class';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import {  ViewSellerServiceService } from '../view-sellers/view-seller-service.service';


@Component({
  selector: 'app-edit-seller',
  templateUrl: './edit-seller.component.html',
  styleUrls: ['./edit-seller.component.scss']
})
export class EditSellerComponent implements OnInit {

  public _subscription:Subscription;
  public seller_id:number;
  public name:string;
  public addressline:string;
  public fk_pincode:number;
  public fk_phone_id:number;
  public gst_no:string;
  public fk_business_id:number;
  //public editseller: edit_seller[] = [];


  constructor(private data1:ViewSellerServiceService,public _router:Router,public _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
    this.seller_id=para["seller_id"];
    console.log(this.seller_id);
   }
);

this.data1.getCustomer_sellerbyid(this.seller_id).subscribe(
  (data:edit_seller[])=>{
    this.seller_id=data[0].seller_id;
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
  
    let driver=new edit_seller(null,this.name,this.addressline,this.fk_pincode,this.fk_phone_id,this.gst_no,this.fk_business_id);
    this.data1.updateCustomer_seller(this.seller_id,driver).subscribe(
      ()=>{
        this._router.navigate(['/customer-manager']);
       
      }
    );
  }

}
