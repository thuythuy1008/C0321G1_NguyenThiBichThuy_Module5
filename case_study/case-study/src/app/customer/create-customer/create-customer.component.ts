import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../model/customer-type";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerServiceService} from "../service/customer-service.service";
import {Route} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerTypes: CustomerType[] = [];
  createForm: FormGroup = new FormGroup({
    customerId: new FormControl(),
    customerCode: new FormControl(),
    customerName: new FormControl(),
    customerBirthday: new FormControl(),
    customerGender: new FormControl(),
    customerIdCard: new FormControl(),
    customerPhone: new FormControl(),
    customerEmail: new FormControl(),
    customerAddress: new FormControl(),
    customerType: new FormControl()
  });

  constructor(private customerService: CustomerServiceService) {
  }
  // constructor(private customerService: CustomerServiceService, private router: Route) {
  //
  // }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    })
  }

  submitForm() {
    const customer = this.createForm.value;
    customer.id = Math.floor(Math.random() * 10000);
    this.customerService.saveCustomer(customer).subscribe(()=> {

    })
  }
}
