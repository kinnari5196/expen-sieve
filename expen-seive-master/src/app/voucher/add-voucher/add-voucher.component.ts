import { VoucherserviceService } from './../view-vouchers/voucherservice.service';
import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { NgForm } from '@angular/forms';
import { master} from './master_class';
import { Subscription } from 'rxjs/Rx';
import { Router,ActivatedRoute } from '@angular/router';
import { voucher } from '../view-vouchers/voucher_class';



@Component({
  selector: 'add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.scss']
})
export class AddVoucherComponent implements OnInit {

  ac_master_dropdowm:master[]=[];
  cashCheque = "cash";
  dropdown_name:string[]=[];

  voucher_id:number;
  from_id:number;
  to_id:number;
  date:string;
  amount:number;
  cash_cheque:number;
  cheque_no:number;
  fk_business_id:number;
  constructor( private data1:VoucherserviceService,  public _router: Router,public _acrouter:ActivatedRoute ) { }

  ngOnInit() {

    this.data1.getAllMaster().subscribe(

      (data:any)=>{
        this.ac_master_dropdowm=data;
        console.log(this.ac_master_dropdowm);
for(let i in this.ac_master_dropdowm)
{
        var grp:number = data[i].fk_group_id;
        var eid:number = data[i].fk_entity_id;

        console.log(grp);
        console.log(eid);

        if(grp==1)
        {
          this.data1.getCustomerbyid(eid).subscribe(
            (data2:any)=>{
              var sname = data2[0].name;
              this.dropdown_name[i]=sname;
              console.log(this.dropdown_name[i]);   
            }
      
          );
        
        }
        else if(grp==2)
        {
          this.data1.getCustomer_sellerbyid(eid).subscribe(
            (data2:any)=>{
              var sname = data2[0].name;
              this.dropdown_name[i]=sname;
              console.log(this.dropdown_name[i]);
            }
          );
        }
        else if(grp==3)
        {
          this.data1.getBankbyid(eid).subscribe(
            (data2:any)=>{
              var sname = data2[0].name;
              this.dropdown_name[i]=sname;
              console.log(this.dropdown_name[i]);   
            }
      
          );
      
      
        }
        else
        {
          this.data1.getEntitybyid(eid).subscribe(
            (data2:any)=>{
              var sname = data2[0].name;
              this.dropdown_name[i]=sname;
              console.log(this.dropdown_name[i]);   
            }
      
          );
          }
    }
  }
  );
    
    
}
/*
  submit(form: NgForm) {
    console.log(form.valid);
    if(!form.valid)
      this.notification.errorNotification('top', 'center');
    else
    {
      this.notification.successNotification('top', 'center');
      console.log(JSON.stringify(form.value));
      let newVoucherData = JSON.stringify(form.value);
      this.service.postVoucherData(newVoucherData)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }*/

  onAdd()
  {
    this.data1.addVoucher(new voucher(this.voucher_id,this.from_id,this.to_id,this.date,this.amount,this.cash_cheque,this.cheque_no,this.fk_business_id)).subscribe(
      (data:any)=>{

       
      alert('added');
      
        this._router.navigate(['/view-product']);
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("voucher add");
      }
    );
    
  }

  isChequeNoDisabled(){
    if(this.cashCheque == 'cash')
      return true;
    else
      return false;
  }

  /*notification = {
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
