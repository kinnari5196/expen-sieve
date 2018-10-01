import { RequestOptions } from '@angular/http';
import { product } from './../view-products/product_class';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { companyDropdown }  from './company_class';
import { GetcompanyProtypeService } from './getcompany-protype.service';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { productTypeDropdown } from './product_type_class';
import { Addproduct } from './product_class';
import { ProductserviceService } from '../view-products/productservice.service';
import { Subscription } from 'rxjs/Rx';

import{ ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from'@angular/forms';
import { CommonModule } from '@angular/common';
import { platformBrowser } from '@angular/platform-browser'
@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  company:companyDropdown[]= [];
  protype:productTypeDropdown[]=[];
  public companies: Array<Select2OptionData>;
  public productTypes: Array<Select2OptionData>;
  public options: Select2OptionData;


//productForm:FormGroup;
//errors=[];


  product_id:number;
  fk_product_type_id: number;
  product_name: string;
  hsncode: number;
  fk_company_id:number;
  price:number;
  stock:number;
  reorder_level:number;
  fk_business_id:number;
  //_subscription:Subscription;
 
 

  constructor(private fb:FormBuilder,private data1:GetcompanyProtypeService, private data2:ProductserviceService, public _router: Router,public _acrouter:ActivatedRoute) { }

  ngOnInit() {

/*this.productForm=new FormGroup({
product_name:new FormControl()

});*/

    this.data1.getAllCompany().subscribe(

      (data:any)=>{
        this.company=data;
        console.log(this.company);
      }
  );

this.data1.getAllProducttype().subscribe(

  (data:any)=>{
    this.protype=data;
    console.log(this.protype);
  }
  );

  }

  onAdd() {

    
  
    this.data2.addProduct(new Addproduct(this.product_id,this.fk_product_type_id,this.product_name,this.hsncode,this.fk_company_id,this.price,this.stock,this.reorder_level,this.fk_business_id)).subscribe(
      (data:any)=>{

       
      alert('added');
      
        this._router.navigate(['/view-product']);
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("book add");
      }
    );
    

  }

  }
