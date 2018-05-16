import { Component, OnInit } from '@angular/core';
import { Voucher } from '../../models/view-voucher';
import { BackEndCalls } from '../../services/backendcalls.service';

@Component({
  selector: 'view-vouchers',
  templateUrl: './view-vouchers.component.html',
  styleUrls: ['./view-vouchers.component.scss']
})
export class ViewVouchersComponent implements OnInit {

  allVouchers: Voucher[] = [
    {
      id: 1,
      from: 'Mr. Anthony Gonsalvis',
      to: 'Mere Pass Maa Hai Bank',
      date: new Date('2018-2-7'),
      amt: 200 
    },
    {
      id: 2,
      from: 'Mr. Vijay Dinanath Chauhan',
      to: 'Khalnayak Co. Pvt. Ltd.',
      date: new Date('2018-2-7'),
      amt: 200 
    },
    {
      id: 3,
      from: 'Ms. Hawa Hawaie',
      to: 'Mr. Sambha on hill',
      date: new Date('2018-2-7'),
      amt: 2800 
    },
  ];
  vouchers: Voucher[] = [];
  searchAmount: string = "";
  searchAccount: string = "";

  constructor(private service: BackEndCalls) { }

  ngOnInit() {

    console.log('before');
    console.log(this.allVouchers);
    this.service.getAllVouchers()
      .subscribe(response => {
        console.log(response.json().voucher);
        this.allVouchers = this.vouchers = response.json().voucher;
        
      });
    
    //this.vouchers = this.allVouchers;
  }

  filterAccount(query: string){
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
  }
}
