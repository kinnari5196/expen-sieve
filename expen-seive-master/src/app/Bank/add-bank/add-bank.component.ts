import { Component, OnInit } from '@angular/core';
import { Bank } from '../../models/bank';
import { NgForm } from '@angular/forms';
import { BackEndCalls } from '../../services/backendcalls.service';
import { ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';

@Component({
  selector: 'add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.scss']
})
export class AddBankComponent implements OnInit {

  isEditPage: boolean = false;
  bank: Bank = {} as Bank;
  public pincodes: Array<Select2OptionData>;
  public options: Select2Options;

  constructor(private service: BackEndCalls, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.bank.acNo = Number(params.get('bank-acNo'));
    });

    if(this.bank.acNo)
      this.isEditPage = true;

    this.service.getPinCodes()
      .subscribe(response => {
        this.pincodes = response.json().pincode;
        this.options = {
          allowClear: true
        }
    });

    if(this.isEditPage){
      console.log('loooool');
      this.service.getSingleBank(JSON.stringify({'accountNo':this.bank.acNo}))
        .subscribe((data) => {
          console.log(data.json());
          let b = data.json().bank[0];
          
          this.bank.name = b.name;
          this.bank.acNo = b.acNo;
          this.bank.gstNo = b.gstNo;
          this.bank.dateSince = b.dateSince;
          this.bank.bsrCode = b.bsrCode;
          this.bank.pincode = b.pincode;
          this.bank.address = b.address;
          this.bank.balance = b.balance;
        });
    }
  }

  submit(form: NgForm) {
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
  }

}
