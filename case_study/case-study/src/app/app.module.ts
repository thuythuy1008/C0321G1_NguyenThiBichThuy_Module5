import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { ListContractDetailComponent } from './contract_detail/list-contract-detail/list-contract-detail.component';
import { CreateContractDetailComponent } from './contract_detail/create-contract-detail/create-contract-detail.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    ListServiceComponent,
    CreateServiceComponent,
    ListContractComponent,
    CreateContractComponent,
    ListContractDetailComponent,
    CreateContractDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
