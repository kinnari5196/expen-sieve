import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { BackEndCalls } from '../../services/backendcalls.service';

@Component({
  selector: 'view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  p: Product[] = [
    {
    id: 1,
    company: 'Raymond',
    name: 'polkaDot',
    type: 'shirt',
    mtrQty: 'mtr',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 500
   },
   {
    id: 2,
    company: 'Qmax',
    name: 'stripes',
    type: 'pant',
    mtrQty: 'mtr',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 1500
   },
   {
    id: 3,
    company: 'Arvind',
    name: 'Checks',
    type: 'box',
    mtrQty: 'qty',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 600
   },
   {
    id: 4,
    company: 'Siyaram',
    name: 'suit',
    type: 'suit',
    mtrQty: 'mtr',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 12500
   },
   {
    id: 5,
    company: 'Siyaram',
    name: 'shirt',
    type: 'shirting',
    mtrQty: 'mtr',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 12500
   }
  ];

  products: Product[] = [];  //Complete list of products
  items: Product[] = [];     ///list of products only in current page
  itemCount: number;
  tableResourse: DataTableResource<Product>;

  constructor(private router: Router, private service: BackEndCalls) { }

  ngOnInit() {
  
    this.service.getAllProducts()
    .subscribe(response => {
      console.log('idhar aya');
      console.log(response.json().products);
      //this.allVouchers = this.vouchers = response.json().voucher;
      this.products = response.json().products;
      this.initializeTable(this.products);
    });
    console.log(this.products);
    //this.products = this.p;
    //this.products.push(this.p);
   
  }

  private initializeTable(products: Product[]){
    this.tableResourse = new DataTableResource(products);
    this.tableResourse.query({offset: 0})
      .then(items => this.items = items);
    this.tableResourse.count()
      .then(count => this.itemCount = count);
  }

  reloadProducts(params){

    if(!this.tableResourse) return;

    this.tableResourse.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredProducts = (query) ?
      this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : 
      this.products;

      this.initializeTable(filteredProducts);
  }

  editProduct(prodId: number){
    this.router.navigate(['/add-product',prodId]);
  }

  deleteProduct(id: number){
    this.service.deleteProduct(JSON.stringify({'id':id}))
    .subscribe((data) => {
      console.log(data);
    });

    this.items.forEach( (item, index) => {
      if(item.id === id){
         this.items.splice(index,1);
      }
    });

    this.products.forEach( (item, index) => {
      if(item.id === id){
         this.products.splice(index,1);
      }
    });
  }
}
