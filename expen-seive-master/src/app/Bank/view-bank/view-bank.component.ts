import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Bank } from '../../models/bank';
import { Router } from '@angular/router';
import { BackEndCalls } from '../../services/backendcalls.service';

@Component({
  selector: 'view-bank',
  templateUrl: './view-bank.component.html',
  styleUrls: ['./view-bank.component.scss']
})
export class ViewBankComponent implements OnInit {
  b: Bank[] = [
    {
      name: 'polkaDot',
      acNo: 65498,
      gstNo: 'mtr',
      dateSince: '2-2-2018',
      bsrCode: '998877',
      address: '30 dfsfd',
      area:'asd',
      city:'sgf',
      state: 'ojn',
      pincode: '20000',
      balance: 500
    },
    {
      name: 'dolkaDot',
      acNo: 98423,
      gstNo: 'mtr',
      dateSince: '2-2-2018',
      bsrCode: '998877',
      address: '30 dfsfd',
      area:'asd',
      city:'sgf',
      state: 'ojn',
      pincode: '20000',
      balance: 500
    },
    {
      name: 'molkaDot',
      acNo: 8465132,
      gstNo: 'mtr',
      dateSince: '2-2-2018',
      bsrCode: '998877',
      address: '30 dfsfd',
      area:'asd',
      city:'sgf',
      state: 'ojn',
      pincode: '20000',
      balance: 500
    },
  ];

  banks: Bank[] = [];  //Complete list of banks
  items: Bank[] = [];     ///list of banks only in current page
  itemCount: number;
  tableResourse: DataTableResource<Bank>;

  constructor(private router: Router, private service: BackEndCalls) { }

  ngOnInit() {
  
    this.service.getAllBanks()
      .subscribe(response => {
        console.log('idhar aya');
        console.log(response.json().bank);
        this.banks = response.json().bank;
        this.initializeTable(this.banks);
    });
    // console.log(this.banks);
    // this.banks = this.b;
    // this.initializeTable(this.banks);
   
  }

  private initializeTable(banks: Bank[]){
    this.tableResourse = new DataTableResource(banks);
    this.tableResourse.query({offset: 0})
      .then(items => this.items = items);
    this.tableResourse.count()
      .then(count => this.itemCount = count);
  }

  reloadBanks(params){

    if(!this.tableResourse) return;

    this.tableResourse.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredBanks = (query) ?
      this.banks.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : 
      this.banks;

      this.initializeTable(filteredBanks);
  }

  editBank(id: number){
    this.router.navigate(['/add-bank',id]);
  }

  deleteBank(id: number){
    this.service.deleteBank(JSON.stringify({'bankAcNo':id}))
    .subscribe((data) => {
      console.log(data);
    });

    this.items.forEach( (item, index) => {
      if(item.acNo === id){
         this.items.splice(index,1);
      }
    });

    this.banks.forEach( (item, index) => {
      if(item.acNo === id){
         this.banks.splice(index,1);
      }
    });
  }
}
