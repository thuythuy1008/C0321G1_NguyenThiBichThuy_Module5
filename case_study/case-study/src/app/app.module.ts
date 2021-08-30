import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {HeaderComponent} from './layout/header/header.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeComponent} from './layout/home/home.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {ListServiceComponent} from './service/list-service/list-service.component';
import {CreateServiceComponent} from './service/create-service/create-service.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {ListContractDetailComponent} from './contract_detail/list-contract-detail/list-contract-detail.component';
import {CreateContractDetailComponent} from './contract_detail/create-contract-detail/create-contract-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {ToastrModule} from 'ngx-toastr';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import {DeleteEmployeeComponent} from "./employee/delete-employee/delete-employee.component";
import {EditEmployeeComponent} from "./employee/edit-employee/edit-employee.component";
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { DeleteServiceComponent } from './service/delete-service/delete-service.component';
import { EditContractComponent } from './contract/edit-contract/edit-contract.component';
import { DeleteContractComponent } from './contract/delete-contract/delete-contract.component';
import { EditContractDetailComponent } from './contract_detail/edit-contract-detail/edit-contract-detail.component';
import { DeleteContractDetailComponent } from './contract_detail/delete-contract-detail/delete-contract-detail.component';

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
    CreateContractDetailComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    EditServiceComponent,
    DeleteServiceComponent,
    EditContractComponent,
    DeleteContractComponent,
    EditContractDetailComponent,
    DeleteContractDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
