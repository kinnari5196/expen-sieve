import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
import { BackEndCalls } from '../../services/backendcalls.service';
import { CustomerSeller } from '../../models/customer-seller';

@Component({
  selector: 'view-sellers',
  templateUrl: './view-sellers.component.html',
  styleUrls: ['./view-sellers.component.scss']
})
export class ViewSellersComponent implements OnInit {

  s: CustomerSeller[] = [
    {
      id: 1,
      name: 'Abc',
      phone1: '6541238765',
      phone2: '8888888888',
      address: 'Chor Gali',
      area: 'lol',
      city: 'Ajmer',
      state: 'Rajasthan',
      pincode: '987654',
      gstNo: 'asd1500',
      currentBalance: 500
    },
    {
      id: 2,
      name: 'Def',
      phone1: '6541238765',
      phone2: '8888888888',
      address: 'Chor Gali',
      area: 'lol',
      city: 'Ajmer',
      state: 'Gujarat',
      pincode: '987654',
      gstNo: 'asd1500',
      currentBalance: 2000
    },
    {
      id: 3,
      name: 'Ghi',
      phone1: '6541238765',
      phone2: '8888888888',
      address: 'Chor Gali',
      area: 'lol',
      city: 'Ajmer',
      state: 'Rajasthan',
      pincode: '987654',
      gstNo: 'asd1500',
      currentBalance: 186500
    }
  ];

  sellers: CustomerSeller[] = [];  //Complete list of Sellers
  items: CustomerSeller[] = [];     ///list of Sellers only in current page
  itemCount: number;
  tableResourse: DataTableResource<CustomerSeller>;

  constructor(private router: Router, private service: BackEndCalls) { }

  ngOnInit() {
  
    this.service.getAllSellers()
      .subscribe(response => {
        console.log(response.json().sellers);
        this.sellers = response.json().sellers;
        this.initializeTable(this.sellers);
    });
    // console.log(this.sellers);
    // this.sellers = this.s;
    // this.initializeTable(this.sellers);
  }

  private initializeTable(sellers: CustomerSeller[]){
    this.tableResourse = new DataTableResource(sellers);
    this.tableResourse.query({offset: 0})
      .then(items => this.items = items);
    this.tableResourse.count()
      .then(count => this.itemCount = count);
  }

  reloadSellers(params){

    if(!this.tableResourse) return;

    this.tableResourse.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredSellers = (query) ?
      this.sellers.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : 
      this.sellers;

      this.initializeTable(filteredSellers);
  }

  editSellers(id: number){
    this.router.navigate(['/add-customer','s',id]);
  }

  deleteSellers(id){
    console.log('delete');
    
    this.service.deleteCustomerSeller(JSON.stringify({'id':id, 'type':'s'}))
    .subscribe((data) => {
      console.log(data);
    });

    this.items.forEach( (item, index) => {
      if(item.id === id){
         this.items.splice(index,1);
      }
    });

    this.sellers.forEach( (item, index) => {
      if(item.id === id){
         this.sellers.splice(index,1);
      }
    });
  }

}

