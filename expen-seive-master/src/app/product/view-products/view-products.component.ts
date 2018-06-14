import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { product } from './product_class';
import { ProductserviceService } from './productservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {


  products: product[] = [];  //Complete list of products
  items:product[] = [];     ///list of products only in current page
  itemCount: number;
  tableResourse: DataTableResource<product>;

  constructor(private router: Router, private data1:ProductserviceService) { }

  ngOnInit() {
  
    this.data1.getAllProduct().subscribe(

          (data:any)=>{
            this.products=data;
            console.log(this.products);
//this.accounts = this.allEntity;
    this.initializeTable(this.products);
    console.log(this.products);
          }
    );
  }

  private initializeTable(products: product[]){
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

  /*editProduct(prodId: number){
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
  }*/
}