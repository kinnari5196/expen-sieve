import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddVoucherComponent } from './voucher/add-voucher/add-voucher.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { AddAccountingEntityComponent } from './account-entity/add-accounting-entity/add-accounting-entity.component';
import { AddProductTypeComponent } from './product/add-product-type/add-product-type.component';
import { ProductManagerComponent } from './product/product-manager/product-manager.component';
import { LoginGuard } from './services/auth.loginguard';
import { VoucherManagerComponent } from './voucher/voucher-manager/voucher-manager.component';
import {InvoiceManagerComponent} from './invoice/invoice-manager/invoice-manager.component';
import { PrintInvoiceComponent } from './invoice/print-invoice/print-invoice.component';
import { CustomerManagerComponent } from './customer/customer-manager/customer-manager.component';
import { BankManagerComponent } from './Bank/bank-manager/bank-manager.component';
import { AddBankComponent } from './Bank/add-bank/add-bank.component';
import {AccountingEntityManagerComponent} from './account-entity/accounting-entity-manager/accounting-entity-manager.component';
import {BalancesheetComponent} from './balancesheet/balancesheet.component';

const routes: Routes =[
    { path: 'login',      component: LoginComponent},      
    { path: 'dashboard',      component: HomeComponent,  canActivate: [LoginGuard]},
    { path: 'add-product/:product-id',      component: AddProductComponent,  canActivate: [LoginGuard] },
    { path: 'add-product',      component: AddProductComponent,  canActivate: [LoginGuard] },
    { path: 'customer-manager',      component: CustomerManagerComponent,  canActivate: [LoginGuard] },
    { path: 'add-customer/:type/:customer-seller-id',      component: AddCustomerComponent,  canActivate: [LoginGuard] },    
    { path: 'add-customer',      component: AddCustomerComponent,  canActivate: [LoginGuard] },
    { path: 'add-voucher',      component: AddVoucherComponent,  canActivate: [LoginGuard] },
    { path: 'add-invoice/:invoice-id',      component: InvoiceComponent,  canActivate: [LoginGuard] },
    { path: 'invoice-manager',      component: InvoiceManagerComponent,  canActivate: [LoginGuard]},
    { path: 'print-invoice/:invoice-id',      component: PrintInvoiceComponent,  canActivate: [LoginGuard]},
    { path: 'accounting-entity-manager',      component: AccountingEntityManagerComponent,  canActivate: [LoginGuard]},
    { path: 'add-accounting-entity/:entity-id',      component: AddAccountingEntityComponent,  canActivate: [LoginGuard]},
    { path: 'add-accounting-entity',      component: AddAccountingEntityComponent,  canActivate: [LoginGuard]},
    { path: 'add-product-type',      component: AddProductTypeComponent,  canActivate: [LoginGuard]},
    { path: 'product-manager',      component: ProductManagerComponent,  canActivate: [LoginGuard]},
    { path: 'voucher-manager',      component: VoucherManagerComponent,  canActivate: [LoginGuard]},   
    { path: 'bank-manager',      component: BankManagerComponent,  canActivate: [LoginGuard]},
    { path: 'add-bank/:bank-acNo',      component: AddBankComponent,  canActivate: [LoginGuard]}, 
    { path: 'add-bank',      component: AddBankComponent,  canActivate: [LoginGuard]}, 
    { path: 'balancesheet',      component: BalancesheetComponent,  canActivate: [LoginGuard]}, 
    { path: '',          redirectTo: 'dashboard', pathMatch: 'full',  canActivate: [LoginGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
