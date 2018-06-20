import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
import { view_bank_class } from './view_bank_class';
import { BankServiceService } from './bank-service.service';

@Component({
  selector: 'view-bank',
  templateUrl: './view-bank.component.html',
  styleUrls: ['./view-bank.component.scss']
})
export class ViewBankComponent implements OnInit {


  banks: view_bank_class[] = [];  //Complete list of banks
  items: view_bank_class[] = [];     ///list of banks only in current page
  itemCount: number;
  tableResourse: DataTableResource<view_bank_class>;

  constructor(private router: Router, private data1: BankServiceService) { }

  ngOnInit() {
  
    this.data1.getAllBank().subscribe(

      (data:any)=>{
        this.banks=data;
        console.log(this.banks); 
    //this.accounts = this.allEntity;
    this.initializeTable(this.banks);
    console.log(this.banks);
      }
);
   
  }

  private initializeTable(banks: view_bank_class[]){
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

  /*editBank(id: number){
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
  }*/
}
