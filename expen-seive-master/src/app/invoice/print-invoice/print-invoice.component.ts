import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackEndCalls } from '../../services/backendcalls.service';

@Component({
  selector: 'print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.scss']
})
export class PrintInvoiceComponent implements OnInit {

  private invoiceNo: string;
  private customerName: string;
  private customerAddress: string;
  private customerState: string;
  private customerCity: string;
  private customerArea: string;
  private customerPincode: string;
  private customerGstNo: string;
  private invoiceDate: Date;
  private invoiceCashCredit: string;
  private cgstPer: number;
  private sgstPer: number;
  private igstPer: number;
  private cgstAmt: number;
  private sgstAmt: number;
  private totTax: number;
  private igstAmt: number;
  private subTotal: number;
  private grandTotal: number;
  private additionalExpTxt: string;
  private additionalExpAmt: number;
  private itemRows: string[][];  //company, productName, price, qty, total

  constructor(private service: BackEndCalls, private route: ActivatedRoute) {  
    // this.customerName= 'Mr Anthony Gonsalvis';
    // this.customerAddress= '221-B';
    // this.customerArea = 'Bakers Street';
    // this.customerState= 'London';
    // this.customerCity= 'UK';
    // this.customerPincode= '123456';
    // this.customerGstNo = '321321';
    // this.invoiceDate= new Date("2-10-2016");
    // this.invoiceCashCredit= 'Cash';
    // this.cgstPer= 2.5 ;
    // this.sgstPer= 2.5;
    // this.igstPer= 2.5;
    // this.cgstAmt= 125;
    // this.sgstAmt= 125;
    // this.igstAmt= 125;
    // this.subTotal= 5000;
    // this.grandTotal= 5385;
    // this.additionalExpTxt= 'Transport';
    // this.additionalExpAmt= 10;
    // this.itemRows= [ 
    //   ['Raymond','Blue Shirt','500', '2', '1000'],
    //   ['Arvind','Pink Suit','1800', '1', '1800'],
    //   ['Siyaram','Black Pant','600', '3', '1800'],
    //   ['Raymond','Green Shirt','400', '5', '2000'] 
    // ];
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.invoiceNo = params.get('invoice-id');
      });

    this.service.printInvoice(JSON.stringify({'invoiceId':this.invoiceNo}))
      .subscribe((data) => {
        console.log(data.json().invoice.customerName);
        let invoice = data.json().invoice;//.product[0];

        this.customerName= invoice.customerName;
        this.customerAddress= invoice.customerAddress;
        this.customerArea = invoice.customerArea;
        this.customerState= invoice.customerState;
        this.customerCity= invoice.customerCity;
        this.customerPincode= invoice.customerPincode;
        this.customerGstNo = invoice.customerGstNo;
        this.invoiceDate= new Date(invoice.invoiceDate);
        this.invoiceCashCredit= invoice.invoiceCashCredit;
        this.cgstPer= invoice.cgstPer;
        this.sgstPer= invoice.sgstPer;
        this.igstPer= invoice.igstPer;
        this.cgstAmt= invoice.cgstAmt;
        this.sgstAmt= invoice.sgstAmt;
        this.igstAmt= invoice.igstAmt;
        this.subTotal= invoice.subTotal;
        this.grandTotal= invoice.grandTotal;
        this.additionalExpTxt= invoice.additionalExpTxt;
        this.additionalExpAmt= invoice.additionalExpAmt;
        this.itemRows= invoice.itemRows;
        this.totTax = Number(this.cgstAmt)+Number(this.sgstAmt);
    });
      
  }

  print(){
    window.print();
  }

}
