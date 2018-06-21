import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
import { view_invoice_class } from './view_invoice_class';
import { InvoiceServiceService } from './invoice-service.service';



@Component({
  selector: 'view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent implements OnInit {

 

  invoices: view_invoice_class[] = [];  //Complete list of products
  items: view_invoice_class[] = [];     ///list of products only in current page
  itemCount: number;
  tableResourse: DataTableResource<view_invoice_class>;

  constructor(private router: Router, private data1: InvoiceServiceService) { }

  ngOnInit() {

    this.data1.getAllInvoice().subscribe(

      (data:any)=>{
        this.invoices=data;
        console.log(this.invoices); 
        
    //this.accounts = this.allEntity;
    this.initializeTable(this.invoices);
    console.log(this.invoices);
      }
);
  }

  private initializeTable(bills: view_invoice_class[]){
    this.tableResourse = new DataTableResource(bills);
    this.tableResourse.query({offset: 0})
      .then(items => this.items = items);
    this.tableResourse.count()
      .then(count => this.itemCount = count);
  }

  reloadInvoices(params){
    if(!this.tableResourse) return;

    this.tableResourse.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredInvoices = (query) ?
      this.invoices.filter(i => i.name.toLowerCase().includes(query.toLowerCase())) : 
      this.invoices;

      this.initializeTable(filteredInvoices);
  }

  /*editInvoice(id: number){
    this.router.navigate(['/add-invoice',id]);
  }

  deleteInvoice(id: number){
    this.service.deleteInvoice(JSON.stringify({'id':id}))
    .subscribe((data) => {
      console.log(data);
    });

    this.items.forEach( (item, index) => {
      if(item.invoiceNo === id){
         this.items.splice(index,1);
      }
    });

    this.invoices.forEach( (item, index) => {
      if(item.invoiceNo === id){
         this.invoices.splice(index,1);
      }
    });
  }

  printInvoice(id){
    this.router.navigate(['/print-invoice',id.row.item.invoiceNo]);
  }*/
}
