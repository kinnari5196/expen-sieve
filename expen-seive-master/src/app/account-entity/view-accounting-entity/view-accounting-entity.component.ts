import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
import { BackEndCalls } from '../../services/backendcalls.service';

declare interface Accounts{
  id:number;
  name: string;
  acGroup: string;
  desc: string;
  gstNo: string;
  date: string;
  amt: number;
}

@Component({
  selector: 'view-accounting-entity',
  templateUrl: './view-accounting-entity.component.html',
  styleUrls: ['./view-accounting-entity.component.scss']
})
export class ViewAccountingEntityComponent implements OnInit {

  a: Accounts[] = [
    {
      id: 1,
      name: 'polkaDot',
      acGroup: 'shirt',
      desc: 'mtr',
      gstNo: 'asd513',
      date: '2-2-2018',
      amt: 500
    },
    {
      id: 2,
      name: 'Dot',
      acGroup: 'shirt',
      desc: 'mtr',
      date: '2-2-2018',
      gstNo: 'asd513',
      amt: 500
    },
    {
      id: 3,
      name: 'pot',
      acGroup: 'shirt',
      desc: 'mtr',
      date: '2-2-2018',
      gstNo: 'asd513',
      amt: 500
    },
   
  ];

  accounts: Accounts[] = [];  //Complete list of accounts
  items: Accounts[] = [];     ///list of accounts only in current page
  itemCount: number;
  tableResourse: DataTableResource<Accounts>;

  constructor(private router: Router, private service: BackEndCalls) { }

  ngOnInit() {
  
    // this.service.getAllAccountingEntity()
    // .subscribe(response => {
    //   console.log(response.json().accounts);
    //   this.accounts = response.json().accounts;
    //   this.initializeTable(this.accounts);
    // });
    console.log(this.accounts);
    this.accounts = this.a;
    this.initializeTable(this.accounts);
  }

  private initializeTable(accounts: Accounts[]){
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

  editAccount(id: number){
    this.router.navigate(['/add-accounting-entity',id]);
  }

  deleteAccount(id: number){
    this.service.deleteAccountingEntity(JSON.stringify({'id':id}))
    .subscribe((data) => {
      console.log(data);
    });

    this.items.forEach( (item, index) => {
      if(item.id === id){
         this.items.splice(index,1);
      }
    });

    this.accounts.forEach( (item, index) => {
      if(item.id === id){
         this.accounts.splice(index,1);
      }
    });
  }
}
