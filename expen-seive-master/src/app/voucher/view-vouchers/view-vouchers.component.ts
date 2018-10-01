import { VoucherserviceService } from './voucherservice.service';
import { Component, OnInit } from '@angular/core';
import { voucher } from './voucher_class';
import { Router } from '@angular/router';
//import { VoucherserviceService } from './voucherserviceService';
@Component({
  selector: 'view-vouchers',
  templateUrl: './view-vouchers.component.html',
  styleUrls: ['./view-vouchers.component.scss']
})
export class ViewVouchersComponent implements OnInit {

  Voucher: voucher[] = []; 
  From_name : String[]=[];
  To_name : String[]=[];
    
    searchAmount: string = "";
    searchAccount: string = "";


  constructor(private router: Router, private data1:VoucherserviceService) { }

  ngOnInit() {

    this.data1.getAllVoucher().subscribe(

      (data:any)=>{
        this.Voucher=data;
        console.log(this.Voucher);

        for(let i in this.Voucher){
var a = this.Voucher[i].from_id;
console.log(a);
this.data1.getMasterbyid(a).subscribe(
(data1:any)=>{
  var g1 = data1;

  var grp:number = data1[0].fk_group_id;
  var eid:number = data1[0].fk_entity_id;
  console.log(grp);
  console.log(eid);

  if(grp==1)
  {
    this.data1.getCustomerbyid(eid).subscribe(
      (data2:any)=>{
        var sname = data2[0].name;
        this.From_name[i]=sname;
        console.log(this.From_name[i]);   
      }

    );
 
  }
  else if(grp==2)
  {
    this.data1.getCustomer_sellerbyid(eid).subscribe(
      (data2:any)=>{
        var sname = data2[0].name;
        this.From_name[i]=sname;
        console.log(this.From_name[i]);
      }
    );
  }
  else if(grp==3)
  {
    this.data1.getBankbyid(eid).subscribe(
      (data2:any)=>{
        var sname = data2[0].name;
        this.From_name[i]=sname;
        console.log(this.From_name[i]);   
      }

    );

  
  }
  else
  {
    this.data1.getEntitybyid(eid).subscribe(
      (data2:any)=>{
        var sname = data2[0].name;
        this.From_name[i]=sname;
        console.log(this.From_name[i]);   
      }

    );

  }
}
);
  
  
        }
for(let i in this.Voucher){
var a = this.Voucher[i].to_id;
console.log(a);
this.data1.getMasterbyid(a).subscribe(
(data1:any)=>{
var g1 = data1;

var grp:number = data1[0].fk_group_id;
var eid:number = data1[0].fk_entity_id;
console.log(grp);
console.log(eid);

if(grp==1)
{
  this.data1.getCustomerbyid(eid).subscribe(
    (data2:any)=>{
      var sname = data2[0].name;
      this.To_name[i]=sname;
      console.log(this.To_name[i]);   
    }

  );
}
else if(grp==2)
{
  this.data1.getCustomer_sellerbyid(eid).subscribe(
    (data2:any)=>{
      var sname = data2[0].name;
      this.To_name[i]=sname;
      console.log(this.To_name[i]);
    }
  );
}
else if(grp==3)
{
  this.data1.getBankbyid(eid).subscribe(
    (data2:any)=>{
     
      var sname = data2[0].name;
      this.To_name[i]=sname;
      console.log(this.To_name[i]); 
      console.log(data2[0]); 
    }

  );
}
else
{
  this.data1.getEntitybyid(eid).subscribe(
    (data2:any)=>{
      var sname = data2[0].name;
      this.To_name[i]=sname;
      console.log(this.To_name[i]);   
    }

  );
}
}
);


      }
    }
);


}

   

  /*filterAccount(query: string){
    let filteredVouchers = (query) ?
      this.allVouchers.filter(v => (v.from.toLowerCase().includes(query.toLowerCase()) || v.to.toLowerCase().includes(query.toLowerCase()))) : 
      this.allVouchers;

    this.vouchers = filteredVouchers;
  }

  filterAmount(query: number){
    let filteredVouchers;
    filteredVouchers = (query) ?
    this.allVouchers.filter(v => (v.amt == query)) : 
    this.allVouchers;

    this.vouchers = filteredVouchers;
  }*/
}
