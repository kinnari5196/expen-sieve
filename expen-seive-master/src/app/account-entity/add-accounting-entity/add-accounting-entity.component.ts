import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{ get_all_ac_grp }  from './getallaccountgrp_class';
import { GetaccountgrpService } from './getaccountgrp.service';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { AccountingEntityManagerService } from '../view-accounting-entity/accounting-entity-manager.service';
import { add_entity_class } from './addentity_class';


@Component({
  selector: 'add-accounting-entity',
  templateUrl: './add-accounting-entity.component.html',
  styleUrls: ['./add-accounting-entity.component.scss']
})
export class AddAccountingEntityComponent implements OnInit {

  acGroup:get_all_ac_grp[]= [];
  public options: Select2OptionData;

  //entity_id:number;
  name:string="";
  description:string="";
  fk_business_id:number;
  gst_no:string;
  //account_id:number;
  //fk_entity_id:number;
  fk_group_id:number;
  date_since:string;
  amount:number;
  //isactive:number;

  constructor(private data1:GetaccountgrpService,public data2:AccountingEntityManagerService, public _router: Router) { }

  ngOnInit() {
    this.data1.getAllGroup().subscribe(

      (data:any)=>{
        this.acGroup=data;
        console.log(this.acGroup);
      }
);
  }

  onAdd() {
  
    this.data2.addCustomer_seller(new add_entity_class(this.name,this.description,this.fk_business_id,this.gst_no,this.fk_group_id,this.date_since,this.amount)).subscribe(
      (data:any)=>{
      alert('added');
      
        this._router.navigate(['/accounting-entity-manager']);
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

 /* submit(form: NgForm) {
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
  }*/


}
