import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
import { BackEndCalls } from '../../services/backendcalls.service';

declare interface ViewInvoiceTableItem{
  invoiceNo: number;
  invoiceDate: string;
  customerName: string;
  invoiceAmt: number;
}

@Component({
  selector: 'view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent implements OnInit {

  i: ViewInvoiceTableItem[] = [
    {
      invoiceNo: 1,
      invoiceDate: '28-3-2018',
      customerName: 'Mr Anthony Gonsalvis',
      invoiceAmt: 15000
    },
    {
      invoiceNo: 2,
      invoiceDate: '2-5-2018',
      customerName: 'Vijay Deenanath Chauhan',
      invoiceAmt: 6000
    },
    {
      invoiceNo: 3,
      invoiceDate: '5-4-2017',
      customerName: 'Mahendra Bahubali',
      invoiceAmt: 700
    }
  ];

  invoices: ViewInvoiceTableItem[] = [];  //Complete list of products
  items: ViewInvoiceTableItem[] = [];     ///list of products only in current page
  itemCount: number;
  tableResourse: DataTableResource<ViewInvoiceTableItem>;

  constructor(private router: Router, private service: BackEndCalls) { }

  ngOnInit() {

    this.service.getAllInvoices()
    .subscribe(response => {
      console.log(response.json().invoice);
      this.invoices = response.json().invoice;
      this.initializeTable(this.invoices);
    });
    // this.invoices = this.i;
    // this.initializeTable(this.invoices);
    // console.log(this.invoices);
  }

  private initializeTable(bills: ViewInvoiceTableItem[]){
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
      this.invoices.filter(i => i.customerName.toLowerCase().includes(query.toLowerCase())) : 
      this.invoices;

      this.initializeTable(filteredInvoices);
  }

  editInvoice(id: number){
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
  }
}
