import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackEndCalls } from '../../services/backendcalls.service';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';

@Component({
  selector: 'add-accounting-entity',
  templateUrl: './add-accounting-entity.component.html',
  styleUrls: ['./add-accounting-entity.component.scss']
})
export class AddAccountingEntityComponent implements OnInit {

  public acGroup: Array<Select2OptionData>;
  public options: Select2Options;

  constructor(private service: BackEndCalls) { }

  ngOnInit() {
    this.service.getAcGroupNames()
      .subscribe(response => {
        console.log(response.json());
        this.acGroup = response.json().ac_group;
        this.options = {
          allowClear: true
        }
      });
  }

  submit(form: NgForm) {
    if(form.valid == false)
      this.notification.errorNotification('top', 'center');
    else
    {
      this.notification.successNotification('top', 'center');
      let data = JSON.stringify(form.value);
      console.log(data);
      
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
