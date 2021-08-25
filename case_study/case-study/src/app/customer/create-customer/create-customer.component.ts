import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../model/customer-type";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerServiceService} from "../service/customer-service.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerTypes: CustomerType[] = [];
  createForm: FormGroup = new FormGroup({
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

  constructor(private customerService: CustomerServiceService, public router: Router) {

  }

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
    this.customerService.saveCustomer(customer).subscribe(()=> {
      // @ts-ignore
      this.router.navigateByUrl('/customer-list');
    })

  }
}
