import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'customer-list', component:ListCustomerComponent},
  {path:'customer-create', component:CreateCustomerComponent},
  {path:'employee-list', component:ListEmployeeComponent},
  {path:'employee-create', component:CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
