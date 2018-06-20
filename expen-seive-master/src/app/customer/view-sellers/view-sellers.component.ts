import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
import { seller } from './seller_class';
import {  ViewSellerServiceService} from './view-seller-service.service';

@Component({
  selector: 'view-sellers',
  templateUrl: './view-sellers.component.html',
  styleUrls: ['./view-sellers.component.scss']
})
export class ViewSellersComponent implements OnInit {


  sellers: seller[] = [];  //Complete list of Sellers
  items: seller[] = [];     ///list of Sellers only in current page
  itemCount: number;
  tableResourse: DataTableResource<seller>;

  constructor(private router: Router, private data1: ViewSellerServiceService) { }

  ngOnInit() {
  
    this.data1.getAllCustomer_seller().subscribe(

      (data:any)=>{
        this.sellers=data;
        console.log(this.sellers); 
    //this.accounts = this.allEntity;
    this.initializeTable(this.sellers);
    console.log(this.sellers);
      }
);
  }

  private initializeTable(sellers: seller[]){
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

  /*editSellers(id: number){
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
  }*/

}

