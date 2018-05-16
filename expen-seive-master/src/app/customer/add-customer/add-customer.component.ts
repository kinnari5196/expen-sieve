import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackEndCalls } from '../../services/backendcalls.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerSeller } from '../../models/customer-seller';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customerSellerNames;
  type;
  date: string;// = '2018-02-02';//Date = new Date('02-02-2018');
  customerSellerData: CustomerSeller;

  public pincodes: Array<Select2OptionData>;
  public options: Select2Options;

  constructor(private service: BackEndCalls, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerSellerData = {} as CustomerSeller;

    this.route.paramMap
      .subscribe(params => {
        this.customerSellerData.id = Number(params.get('customer-seller-id'));
        this.type = params.get('type');
        console.log(this.type); 
      });
    
    this.service.getAllCustomerSellerNames()
      .subscribe(response => {
        console.log(response.json().csnames);
        this.customerSellerNames = response.json().csnames;
      });

      this.service.getPinCodes()
        .subscribe(response => {
          this.pincodes = response.json().pincode;
          this.options = {
            allowClear: true
          }
      });

    if(this.customerSellerData.id != 0)
    {
      this.service.getSingleCustomerSeller(JSON.stringify({'id':this.customerSellerData.id, 'type':this.type}))
          .subscribe((data) => {
            let cs = data.json().customer_seller[0];
            console.log('idhar aya');
            console.log(cs.id);
            this.customerSellerData.id = cs.id ;
            this.customerSellerData.name = cs.name ;
            this.customerSellerData.phone1 = cs.phone1 ;
            this.customerSellerData.phone2 = cs.phone2 ;
            this.customerSellerData.gstNo = cs.gstNo ;
            this.customerSellerData.address = cs.address ;
            this.customerSellerData.pincode = cs.pincode ;
            this.customerSellerData.city = cs.city ;
            this.customerSellerData.state = cs.state ;
            this.customerSellerData.area = cs.area ;
            this.customerSellerData.currentBalance = cs.currentBalance ;
          });
    }
  }

  addCustomer(form :NgForm)
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
  }

  notification = {
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
  }
}
