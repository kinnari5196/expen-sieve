import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppSettings} from './app-settings.service'

@Injectable()
export class BackEndCalls {

  //login
  loginURL = '/login.php';

  //pincode
  getPincodeURL = "/get_pincode.php";

  //company
  getCompanyURL = '/get_company.php';
  
  //product
  getSingleProductURL = '/get_single_product.php';
  getProductTypeAndCompanyURL = "/get_producttype_company.php";
  postNewProductURL = "/add_product_insert.php";
  editProductURL = "/edit_product.php";
  getAllProductsURL = "/get_all_product.php";
  deleteProductURL = "/delete_product.php";
  
  //customer
  getAllCustomerSellerNamesURL = "/get_customer_seller_names.php";
  getCustomerURL = '/get_customer.php';
  postNewCustomerURL = "/add_customer_insert.php";
  getAllCustomersURL = "/get_all_customer.php";
  deleteCustomerSellerURL = "/delete_customer_seller.php";
  getSingleCustomerSellerURL = "/get_single_customer_seller.php"

  //seller
  getAllSellersURL = "/get_all_seller.php";
  editCustomerSellerURL = "/edit_customer_seller.php";

  //product type
  getProductTypeURL = "/productType";
  
  //voucher
  postVoucherURL = "/add_voucher_insert.php";
  getVoucherNamesURL = "/get_voucher_acmaster.php";
  getAllVouchersURL = "/get_voucher.php";

  //invoice
  getInvoiceNoURL = "/invoice_number_generation.php";
  getIsIgstApplicableURL = "/is_igst_applicable.php";
  postInvoiceURL = "/invoice_insert.php";
  getInvoiceProductURL = "/get_invoice_product.php"
  getInvoiceProductPriceURL = "/get_price_product.php";
  getAllInvoicesURL = "/get_all_invoice.php";
  deleteInvoiceURL = "/delete_invoice.php";
  getSingleInvoiceURL = "/get_single_invoice.php";
  printInvoiceURL = "/print_single_invoice.php"

  //AC Group
  getAcGroupNamesURL = "/get_acgroup.php";

  //Accounting Entity
  getAllAccountingEntityURL = "/get_.php";
  deleteAccountingEntityURL = "/delete_.php";

  //Bank
  postNewBankDataURL = "/bank_insert.php";
  editBankURL = "/edit_bank.php";
  getSingleBankURL = "/get_single_bank.php";
  getAllBanksURL = "/get_all_bank.php"
  deleteBankURL = "/delete_bank.php"

  constructor(private http : Http) { }

  //login
  loginUser(loginData){
    return this.http.post(AppSettings.BACKEND_URL + this.loginURL, loginData)    
  }

  //pincode
  getPinCodes(){
    return this.http.get(AppSettings.BACKEND_URL + this.getPincodeURL)
  }

  //company
  getCompanies(){
    return this.http.get(AppSettings.BACKEND_URL + this.getCompanyURL)
  }

  //customer
  getCustomers(){
    return this.http.get(AppSettings.BACKEND_URL + this.getCustomerURL)
  }
  postNewCustomer(data){
    return this.http.post(AppSettings.BACKEND_URL + this.postNewCustomerURL, data)
  }
  getAllCustomerSellerNames(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllCustomerSellerNamesURL)
  }
  getAllCustomers(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllCustomersURL)
  }
  deleteCustomerSeller(data){
    return this.http.post(AppSettings.BACKEND_URL + this.deleteCustomerSellerURL, data)
  }
  getSingleCustomerSeller(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getSingleCustomerSellerURL, data)
  }
  editCustomerSeller(data){
    return this.http.post(AppSettings.BACKEND_URL + this.editCustomerSellerURL, data)
  }

  //seller
  getAllSellers(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllSellersURL)
  }

  //product
  getProductTypeAndCompany(){
    return this.http.get(AppSettings.BACKEND_URL + this.getProductTypeAndCompanyURL)
  }
  getSingleProduct(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getSingleProductURL, data)
  }
  postNewProductsData(newProductJsonData){
    return this.http.post(AppSettings.BACKEND_URL + this.postNewProductURL, newProductJsonData)
  }
  editProduct(data){
    return this.http.post(AppSettings.BACKEND_URL + this.editProductURL, data)
  }
  getAllProducts(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllProductsURL)
  }
  deleteProduct(data){
    return this.http.post(AppSettings.BACKEND_URL + this.deleteProductURL, data)
  }

  //product type
  getProductTypes(){
    return this.http.get(AppSettings.BACKEND_URL + this.getProductTypeURL)
  }

  //invoice
  getInvoiceNo(){
    return this.http.get(AppSettings.BACKEND_URL + this.getInvoiceNoURL)
  }
  getInvoiceCompany(){
    return this.http.get(AppSettings.BACKEND_URL + this.getCompanyURL)
  }
  postInvoiceData(invoiceJsonData){
    return this.http.post(AppSettings.BACKEND_URL + this.postInvoiceURL, invoiceJsonData)    
  }
  getInvoiceProduct(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getInvoiceProductURL, data)    
  }
  getInvoiceProductPrice(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getInvoiceProductPriceURL, data)    
  }
  getIsIgstApplicable(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getIsIgstApplicableURL, data)    
  }
  getAllInvoices(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllInvoicesURL)
  }
  deleteInvoice(data){
    return this.http.post(AppSettings.BACKEND_URL + this.deleteInvoiceURL, data)
  }
  getSingleInvoice(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getSingleInvoiceURL, data)  
  }
  printInvoice(data){
    return this.http.post(AppSettings.BACKEND_URL + this.printInvoiceURL, data)  
  }

  //voucher
  postVoucherData(voucherJsonData){
    return this.http.post(AppSettings.BACKEND_URL + this.postVoucherURL, voucherJsonData)    
  }
  getVoucherNames(){
    return this.http.get(AppSettings.BACKEND_URL + this.getVoucherNamesURL)
  }
  getAllVouchers(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllVouchersURL)
  }

  //AC Group
  getAcGroupNames(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAcGroupNamesURL)
  }

  //Accounting Entity
  getAllAccountingEntity(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllAccountingEntityURL)
  }
  deleteAccountingEntity(data){
    return this.http.post(AppSettings.BACKEND_URL + this.deleteAccountingEntityURL, data)
  }

  //Bank
  postNewBankData(data){
    return this.http.post(AppSettings.BACKEND_URL + this.postNewBankDataURL, data)    
  }
  editBank(data){
    return this.http.post(AppSettings.BACKEND_URL + this.editBankURL, data)
  }
  getSingleBank(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getSingleBankURL, data)
  }
  getAllBanks(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllBanksURL)
  }
  deleteBank(data){
    return this.http.post(AppSettings.BACKEND_URL + this.deleteBankURL, data)
  }
}
