import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { BackEndCalls } from './../../services/backendcalls.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public companies: Array<Select2OptionData>;
  public productTypes: Array<Select2OptionData>;
  public options: Select2Options;

  private prodId: string;
  private pname: string;
  private hsnCode: number;
  private price;
  private stock;
  private reorderLvl;
  private companyId;
  private prodTypeId;


  constructor(private service: BackEndCalls, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.prodId = params.get('product-id');
      });

    this.service.getProductTypeAndCompany()
      .subscribe(response => {
        console.log(response.json().product_type);
        this.companies = response.json().company;
        this.productTypes = response.json().product_type;
        this.options = {
          allowClear: true
        }
      });

      //alert(this.prodId);
      if(this.prodId != null){
        this.service.getSingleProduct(JSON.stringify({'productId':this.prodId}))
          .subscribe((data) => {
            let prod = data.json().product[0];
            
            this.pname = prod.name;
            this.companyId = prod.company;
            this.prodTypeId = prod.type;
            this.hsnCode = prod.hsnCode;
            this.price = prod.price;
            this.stock = prod.stock;
            this.reorderLvl = prod.reorderLevel;
          });
      }
  }

  public companyValueChanged(event) {
    console.log(event);
  }

  submit(form: NgForm) {
    form.value.id = this.prodId;
    let newProductJsonData = JSON.stringify(form.value);
    console.log(form);

    if(form.valid == false)
      this.notification.errorNotification('top','center');
    else
    {
      this.notification.successNotification('top','center');
      if(this.prodId == null)
      {
        this.service.postNewProductsData(newProductJsonData)
          .subscribe((data) => {
            console.log(data);
          });
      }
      else
      {
        this.service.editProduct(newProductJsonData)
        .subscribe((data) => {
          console.log(data);
        });
      }
    }
  }


  notification = {
    errorNotification: function(from, align){
      
      $['notify']({
        icon: "pe-7s-info",
        message: "Fields must not be empty."

      },
      {
        type: 'danger',
        timer: 20,
        placement: {
          from: from,
          align: align
        }
      }); 
    },
    successNotification: function(from, align){
      
      $['notify']({
        icon: "pe-7s-info",
        message: "Entered Successfully."

      },
      {
        type: 'success',
        timer: 20,
        placement: {
          from: from,
          align: align
        }
      }); 
    }
  }
  
}
