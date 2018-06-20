import { Component, OnInit } from '@angular/core';
import { Bank } from '../../models/bank';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { add_bank_class } from './add_bank_class';
import { getPincodeDropdown } from './get_pincode_class';
import { BankServiceService } from '../view-bank/bank-service.service';
import { GetPincodeService1 } from './get-pincode.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.scss']
})
export class AddBankComponent implements OnInit {

  pincode:getPincodeDropdown[]=[];
  public companies: Array<Select2OptionData>;
  public productTypes: Array<Select2OptionData>;
  public options: Select2OptionData;

  constructor(private data1:GetPincodeService1, private data2:BankServiceService, public _router: Router,public _acrouter:ActivatedRoute) { }

  bank_id:number;
  account_no:number;
  fk_pincode:number;
  name:string;
  bsrcode:string;
  addressline:string;
  gst_no:string;
  date_since:string;
  amount:number;
  

  ngOnInit() {

    /*this.data1.getAllAdress().subscribe(

      (data:any)=>{
        this.pincode=data;
        console.log(this.pincode);
      }
  );*/
    
  }

  onAdd() {
  
    this.data2.addBank(new add_bank_class(this.bank_id,this.account_no,this.fk_pincode,this.name,this.bsrcode,this.addressline,this.gst_no,this.date_since,this.amount)).subscribe(
      (data:any)=>{
      alert('added');
      console.log(this.name);
        this._router.navigate(['/bank-manager']);
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

 /*submit(form: NgForm) {
    if(form.valid == false)
      this.notification.errorNotification('top', 'center');
    else
    {
      this.notification.successNotification('top', 'center');
      let data = JSON.stringify(form.value);
      console.log(data);
      console.log('acNo(t/f): ' + this.bank.acNo);

      if(this.isEditPage == false)
      {
        console.log('add new');
        this.service.postNewBankData(data)
          .subscribe((data) => {
            console.log(data);
          });
      }
      else
      {
        console.log('edit');
        this.service.editBank(data)
        .subscribe((data) => {
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
  }*/

}
