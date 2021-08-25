import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from "../service/customer-service.service";
import {Customer} from "../model/customer";


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer [] = [];
  p: number;

  constructor(private customer: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.customer.getAllCustomer().subscribe(data => {
      this.customers = data;
    });
  }
}
