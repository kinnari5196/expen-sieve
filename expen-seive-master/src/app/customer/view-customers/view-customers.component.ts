import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
import { BackEndCalls } from '../../services/backendcalls.service';
import { CustomerSeller } from '../../models/customer-seller';

@Component({
  selector: 'view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.scss']
})
export class ViewCustomersComponent implements OnInit {

  c: CustomerSeller[] = [
    {
      id: 1,
      name: 'Mr. Honey Singh',
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
      name: 'Mr. Badshah',
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
      name: 'Mr. Eminem',
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

  customers: CustomerSeller[] = [];  //Complete list of Customers
  items: CustomerSeller[] = [];     ///list of Customers only in current page
  itemCount: number;
  tableResourse: DataTableResource<CustomerSeller>;

  constructor(private router: Router, private service: BackEndCalls) { }

  ngOnInit() {
  
    this.service.getAllCustomers()
      .subscribe(response => {
        console.log('idhar aya');
        console.log(response.json().customers);
        this.customers = response.json().customers;
        this.initializeTable(this.customers);
    });
    // console.log(this.customers);
    // this.customers = this.c;
    // this.initializeTable(this.customers);
  }

  private initializeTable(customers: CustomerSeller[]){
    this.tableResourse = new DataTableResource(customers);
    this.tableResourse.query({offset: 0})
      .then(items => this.items = items);
    this.tableResourse.count()
      .then(count => this.itemCount = count);
  }

  reloadCustomers(params){

    if(!this.tableResourse) return;

    this.tableResourse.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredCustomers = (query) ?
      this.customers.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : 
      this.customers;

      this.initializeTable(filteredCustomers);
  }

  editCustomer(id: number){
    this.router.navigate(['/add-customer','c',id]);
  }

  deleteCustomer(id: number){
    this.service.deleteCustomerSeller(JSON.stringify({'id':id, 'type':'c'}))
    .subscribe((data) => {
      console.log(data);
    });

    this.items.forEach( (item, index) => {
      if(item.id === id){
         this.items.splice(index,1);
      }
    });

    this.customers.forEach( (item, index) => {
      if(item.id === id){
         this.customers.splice(index,1);
      }
    });
  }

}

