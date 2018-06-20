import { Router,ActivatedRoute } from '@angular/router';
import { Addproduct } from './../add-product/product_class';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { ProductserviceService  } from '../view-products/productservice.service';
import { productTypeDropdown } from '../add-product/product_type_class';
import { companyDropdown }  from '../add-product/company_class';
import { GetcompanyProtypeService } from '../add-product/getcompany-protype.service';




@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  company:companyDropdown[]= [];
  protype:productTypeDropdown[]=[];
  public companies: Array<Select2OptionData>;
  public productTypes: Array<Select2OptionData>;
  public options: Select2OptionData;  



  public _subscription:Subscription;
  product_id:number;
  public fk_product_type_id:number;
  public product_name:string;
  public hsncode:number;
  public fk_company_id: number;
  public price:number;
  public stock:number;
  public reorder_level:number;
  public fk_business_id:number;
  public editproduct: Addproduct[] = [];

  constructor( private data1:GetcompanyProtypeService,public _router:Router,public _activatedRoute:ActivatedRoute,public data:ProductserviceService ) { }

  ngOnInit() {


    this._subscription=this._activatedRoute.params.subscribe(
            (para:any)=>{
          this.product_id=para["product_id"];
          console.log(this.product_id);
         
      }
  );

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

  this.data.getProductbyid(this.product_id).subscribe(
    (data:Addproduct[])=>{
      this.fk_product_type_id=data[0].fk_product_type_id;
      this.product_name=data[0].product_name;
      this.hsncode=data[0].hsncode;
      this.fk_company_id=data[0].fk_company_id;
      this.price=data[0].price;
      this.stock=data[0].stock;
      this.reorder_level=data[0].reorder_level;
      this.fk_business_id=data[0].fk_business_id;
    
   
     
    }
  );
  }

  onUpdate(){
  
    let driver=new Addproduct(null,this.fk_product_type_id,this.product_name,this.hsncode,this.fk_company_id,this.price,this.stock,this.reorder_level,this.fk_business_id);
    this.data.updateProduct(this.product_id,driver).subscribe(
      ()=>{
        this._router.navigate(['/customer-manager']);
       
      }
    );
  }

}
