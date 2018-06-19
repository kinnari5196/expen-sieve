import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { productTypeDropdown } from '../add-product/product_type_class'; 
import { ProductserviceService } from '../view-products/productservice.service';
import { Subscription } from 'rxjs/Rx';



@Component({
  selector: 'add-product-type',
  templateUrl: './add-product-type.component.html',
  styleUrls: ['./add-product-type.component.scss']
})
export class AddProductTypeComponent implements OnInit {

  product_type_id:number;
  product_type_description:string;
  meter_qty:string;

  constructor( private data2:ProductserviceService, public _router: Router,public _acrouter:ActivatedRoute ) { }

  ngOnInit() {
  }

  onAdd() {

    
  
    this.data2.addProducttype(new productTypeDropdown(this.product_type_id,this.product_type_description,this.meter_qty)).subscribe(
      (data:any)=>{
      alert('added');
      console.log(this.product_type_id,this.product_type_description,this.meter_qty);
    
    this._router.navigate(['/view-product']);
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("product type add");
      }
    );
    

  }


}
