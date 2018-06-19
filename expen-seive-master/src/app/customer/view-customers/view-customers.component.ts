import { CustomerSeller } from './../../models/customer-seller';
import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
import { customer } from './customer_class';
import { ViewCustomerServiceService } from './view-customer-service.service';

@Component({
  selector: 'view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.scss']
})
export class ViewCustomersComponent implements OnInit {


  customers: customer[] = [];  //Complete list of products
  items:customer[] = [];     ///list of products only in current page
  itemCount: number;
  tableResourse: DataTableResource<customer>;


  constructor(private router: Router, private data1: ViewCustomerServiceService) { }

  ngOnInit() {
  
    this.data1.getAllCustomer_seller().subscribe(

      (data:any)=>{
        this.customers=data;
        console.log(this.customers); 
    //this.accounts = this.allEntity;
    this.initializeTable(this.customers);
    console.log(this.customers);
      }
);

  }

  private initializeTable(customers: customer[]){
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

/*  editCustomer(id: number){
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
  }*/

}

