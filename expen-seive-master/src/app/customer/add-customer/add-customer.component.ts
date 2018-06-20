import { ViewCustomerServiceService } from './../view-customers/view-customer-service.service';
//import { customer } from '../view-customers/customer_class';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { getPincodeDropdown }  from './get_pincode_class';
import { customer } from './customer_class';
import { add_customer_class } from './add_customer_class';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
//import { Addproduct } from './product_class';
import { GetPincodeService } from './get-pincode.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  pincode:getPincodeDropdown[]=[];
  public companies: Array<Select2OptionData>;
  public productTypes: Array<Select2OptionData>;
  public options: Select2OptionData;
  

  constructor(private data1:GetPincodeService, private data2:ViewCustomerServiceService, public _router: Router,public _acrouter:ActivatedRoute) { }

  cs_id:number;
  name:string;
  addressline:string;
  fk_pincode:number;
  fk_phone_id:number;
  gst_no:string;
  date_since:string;
  amount:number;
  phone_no1:string;
  phone_no2:string

  ngOnInit() {
    
    /*this.data1.getAllAdress().subscribe(

      (data:any)=>{
        this.pincode=data;
        console.log(this.pincode);
      }
  );*/
  }

  onAdd() {
  
    this.data2.addCustomer_seller(new add_customer_class(this.cs_id,this.name,this.addressline,this.fk_pincode,this.fk_phone_id,this.gst_no,this.date_since,this.amount,this.phone_no1,this.phone_no2)).subscribe(
      (data:any)=>{
      alert('added');
      
        this._router.navigate(['/customer-manager']);
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("book add");
      }
    );
      }

 /* addCustomer(form :NgForm)
  {
    console.log(form.valid);
    if(form.valid == false)
      this.notification.errorNotification('top','center');
    else
    {
      this.notification.successNotification('top','center')  
      if(this.customerSellerData.id == 0)
      {
        let jsonData = JSON.stringify(form.value);
        console.log('add new customer');
        console.log(jsonData);
        this.service.postNewCustomer(jsonData)
          .subscribe((data)=>{
            console.log(data);
          });
      }
      else{
        form.value.id = this.customerSellerData.id;
        console.log('edit customer');
        let jsonData = JSON.stringify(form.value);
        console.log(jsonData);
        this.service.editCustomerSeller(jsonData)
          .subscribe((data)=>{
            console.log(data);
        });
      }
    }
  }*/

 /* notification = {
    errorNotification: function(from, align){
      
      $['notify']({
        icon: "pe-7s-info",
        message: "Required fields must not be empty."

      },
      {
        type: 'danger',
        timer: 20,
        placement: {
          from: from,
          align: align
        }
      }); 
    },
    successNotification: function(from, align){
      
      $['notify']({
        icon: "pe-7s-info",
        message: "Entered Successfully."
      },
      {
        type: 'success',
        timer: 20,
        placement: {
          from: from,
          align: align
        }
      }); 
    }
  }*/
}
