import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
import { AccountingEntityManagerService } from './accounting-entity-manager.service';
import { accounting_entity_manager } from './accounting_entity_manager'; 




@Component({
  selector: 'view-accounting-entity',
  templateUrl: './view-accounting-entity.component.html',
  styleUrls: ['./view-accounting-entity.component.scss']
})
export class ViewAccountingEntityComponent implements OnInit {
  allEntity:accounting_entity_manager[]= [];
  accounts: accounting_entity_manager[] = [];  //Complete list of accounts
  items: accounting_entity_manager[] = [];     ///list of accounts only in current page
  itemCount: number;
  tableResourse: DataTableResource<accounting_entity_manager>;

  constructor(private router: Router, private data1:AccountingEntityManagerService) { }

  ngOnInit() {
  
      this.data1.getAllMaster().subscribe(

          (data:any)=>{
            this.allEntity=data;
            console.log(this.allEntity);
this.accounts = this.allEntity;
    this.initializeTable(this.accounts);
    console.log(this.accounts);
          }
    );
  //  console.log(this.allEntity);
    
  }

  private initializeTable(accounts: accounting_entity_manager[]){
    this.tableResourse = new DataTableResource(accounts);
    this.tableResourse.query({offset: 0})
      .then(items => this.items = items);
    this.tableResourse.count()
      .then(count => this.itemCount = count);
  }

  reloadAccount(params){

    if(!this.tableResourse) return;

    this.tableResourse.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredAccountss = (query) ?
      this.accounts.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : 
      this.accounts;

      this.initializeTable(filteredAccountss);
  }

  


}