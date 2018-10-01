import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { add_seller_class }  from './add_seller_class';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { ViewSellerServiceService } from '../view-sellers/view-seller-service.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.scss']
})
export class AddSellerComponent implements OnInit {

  public companies: Array<Select2OptionData>;
  public productTypes: Array<Select2OptionData>;
  public options: Select2OptionData;

  constructor(private data1:ViewSellerServiceService, public _router: Router,public _acrouter:ActivatedRoute) { }

  seller_id:number;
  name:string;
  addressline:string;
  fk_pincode:number;
  fk_phone_id:number;
  gst_no:string;
  date_since:string;
  amount:number;
  phone_no1:string;
  phone_no2:string;
  ngOnInit() {

      /*this.data1.getAllAdress().subscribe(

      (data:any)=>{
        this.pincode=data;
        console.log(this.pincode);
      }
  );*/
  }


  onAdd() {
  
    this.data1.addCustomer_seller(new add_seller_class(this.seller_id,this.name,this.addressline,this.fk_pincode,this.fk_phone_id,this.gst_no,this.date_since,this.amount,this.phone_no1,this.phone_no2)).subscribe(
      (data:any)=>{
      alert('added');
        this._router.navigate(['/view-seller']);
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("seller add");
      }
    );
      }


}
