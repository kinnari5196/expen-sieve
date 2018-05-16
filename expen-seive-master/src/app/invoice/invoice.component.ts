import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { BackEndCalls } from '../services/backendcalls.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

declare interface UserData{
  customerId: number;
  date: string;
  cashCredit: number;
  items: string[][];
  itemsCount: number;
  additionalExpText: string;
  additionalExpAmt: number;
  subTotalAmt: number;
  cgstAmt: number;
  sgstAmt: number;
  igstAmt: number;
  grandTotalAmt: number;
}

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  private invoiceNo = 0;
  private isIgstApplicable: boolean = false;

  public invoiceCustomer: Array<Select2OptionData>;
  public invoiceProduct: Array<Select2OptionData>;
  public invoiceCompany: Array<Select2OptionData>;
  
  public options: Select2Options;

  public tableData1: TableData;
  public userData: UserData;
  private newTableRow: any = {};
  private fieldDataRow: any = {};
  
  private invoiceCustomerNo: number = 0;
  private cashCredit: string;
  private date: string;
  private subTotal: number = 0.0;
  private cgst: number = 0;
  private sgst: number = 0;
  private igst:number = 0;
  private additionalExpenseText: string;
  private additionalExpense: number = 0;
  private grandTotal: number = 0;

  private cgstPer: number = 2.5;
  private sgstPer: number = 2.5;
  private igstPer: number = 2.5;


  constructor(private service: BackEndCalls, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.invoiceNo = Number(params.get('invoice-id'));
      });

    this.service.getCustomers()
      .subscribe(response => {
        console.log(response.json().customer);
        this.invoiceCustomer = response.json().customer;
        this.options = {
          allowClear: true
        }
    });

    this.service.getInvoiceCompany()
      .subscribe(response => {
        console.log(response.json().company);
        this.invoiceCompany = response.json().company;
        this.options = {
          allowClear: true
        }
    });

    this.tableData1 = {
      headerRow: [ '#', 'Company', 'Product', 'Price', 'Qty', 'Total', 'Remove'],
      dataRows: []
   };

   this.userData = {
      customerId: 0,
      date: "",
      cashCredit: 0,
      items: [],
      itemsCount: 0,
      additionalExpText: '',
      additionalExpAmt: 0,
      subTotalAmt: 0,
      cgstAmt: 0,
      sgstAmt: 0,
      igstAmt: 0,
      grandTotalAmt: 0
   }

   if(this.invoiceNo == 0){
    this.service.getInvoiceNo()
      .subscribe(response => {
        console.log(response.json());
        this.invoiceNo = response.json();
    });
    }else{
      this.service.getSingleInvoice(JSON.stringify({'id':this.invoiceNo}))
      .subscribe((data) => {
        //let invoice = data.json();//.product[0];
        
        // this.invoiceCustomerNo= 0;
        // this.cashCredit=;
        // this.date=;
        // this.subTotal= 0.0;
        // this.cgst= 0;
        // this.sgst= 0;
        // this.igst= 0;
        // this.additionalExpenseText=;
        // this.additionalExpense= 0;
        // this.grandTotal= 0;

        // this.cgstPer= 2.5;
        // this.sgstPer= 2.5;
        // this.igstPer= 2.5;
    });
    }
  }

  productNameChanged(event){
    console.log('entered');
    this.service.getInvoiceProductPrice(JSON.stringify({"companyId": this.fieldDataRow[0], "productId": event.value}))
      .subscribe((data) => {
        console.log('price');
        console.log(data.json());
        this.newTableRow[2] = data.json();
      });

    console.log(JSON.stringify(["productId", event.value]));
    this.newTableRow[1] = event.data[0].text;
    this.fieldDataRow[1] = event.value;
  }

  companyChanged($event){
    //console.log(JSON.stringify({"companyId": $event.value, "productId": $event.value}));
    this.service.getInvoiceProduct(JSON.stringify({"companyId": $event.value}))
      .subscribe((data) => {
        console.log('retriving product : ');
        console.log(data.json().product);

        this.invoiceProduct = data.json().product;
        this.options = {
          allowClear: true
        }
      });
    console.log($event);
    this.newTableRow[0] = $event.data[0].text;
    this.fieldDataRow[0] = $event.value;
  }

  customerChanged(event){
    this.service.getIsIgstApplicable(JSON.stringify({"customerId": event.value}))
      .subscribe((data) => {
        //true means igst applicable
        console.log('igstApplicable: ' + data.json());
        
      });
  }

  addRow(){
    if(this.newTableRow[0]==null || this.newTableRow[1]==null || this.newTableRow[2]==null || this.newTableRow[3]==null || this.newTableRow[4]==null){
      this.notification.showNotification('top','center');
    }
    else{
      this.fieldDataRow[2] = this.newTableRow[2];
      this.fieldDataRow[3] = this.newTableRow[3];
      this.fieldDataRow[4] = this.newTableRow[4];

      this.tableData1.dataRows.push(this.newTableRow);
      this.userData.items.push(this.fieldDataRow);
      this.newTableRow = {};
      this.fieldDataRow = {};

      this.calcInvoiceSubTotal();
    }
  }

  deleteRow(index){
    this.tableData1.dataRows.splice(index, 1);
    this.userData.items.splice(index, 1);
    this.calcInvoiceSubTotal();
  }

  calcTotal(){
    this.newTableRow[4] = this.newTableRow[3] * this.newTableRow[2];
  }

  calcInvoiceSubTotal(){
    this.subTotal = 0.0;
    this.tableData1.dataRows.forEach(element => {
      this.subTotal = this.subTotal + Number(element[4]);
      console.log(element[4]);
    });

    if(!this.isIgstApplicable){
      this.cgst = this.subTotal * (this.cgstPer / 100);
      this.sgst = this.subTotal * (this.sgstPer / 100);
    }
    else
      this.igst = this.subTotal * (this.igstPer / 100);

    this.grandTotal = this.subTotal + this.cgst + this.sgst + this.igst + this.additionalExpense;
    console.log(this.subTotal);
  }

  submit(form: NgForm){
    this.userData.customerId = form.value.invoiceCustomer;
    this.userData.date = form.value.invoiceDate + "";
    this.userData.itemsCount = this.userData.items.length;
    if(form.value.cashCredit == "Cash")
      this.userData.cashCredit = 0;
    else
      this.userData.cashCredit = 1;  
    this.userData.additionalExpText = form.value.additionalExpenseText;
    this.userData.additionalExpAmt = this.additionalExpense;
    this.userData.subTotalAmt = this.subTotal;
    this.userData.cgstAmt = this.cgst;
    this.userData.sgstAmt = this.sgst;
    this.userData.igstAmt = this.igst;
    this.userData.grandTotalAmt = this.grandTotal;

    console.log(JSON.stringify(this.userData));

    this.service.postInvoiceData(JSON.stringify(this.userData))
      .subscribe((data) => {
        console.log(data.json());
      });
  }


  notification = {
      showNotification: function(from, align){
        
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
        
    }
  }
}
