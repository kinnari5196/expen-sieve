import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { NgForm } from '@angular/forms';
import { BackEndCalls } from '../../services/backendcalls.service';

@Component({
  selector: 'add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.scss']
})
export class AddVoucherComponent implements OnInit {

  public voucherFrom: Array<Select2OptionData>;
  public voucherTo: Array<Select2OptionData>;
  public options: Select2Options;

  cashCheque = "cash";

  constructor(private service: BackEndCalls) { }

  ngOnInit() {

    this.service.getVoucherNames()
      .subscribe(response => {
        console.log(response.json());
        this.voucherFrom = response.json().ac_master;
        this.voucherTo = response.json().ac_master;
        this.options = {
          allowClear: true
        }
      });
    
    // this.voucherFrom = [{"id":"1","text":"arvind"},{"id":"2","text":"raymond"}];
    // this.voucherTo = [{"id":"1","text":"arvind"},{"id":"2","text":"raymond"}];
    // this.options = {
    //   allowClear: true
    // }
  }

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
  }

  isChequeNoDisabled(){
    if(this.cashCheque == 'cash')
      return true;
    else
      return false;
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
