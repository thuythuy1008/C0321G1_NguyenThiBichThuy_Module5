import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from "../service/customer-service.service";
import {Customer} from "../model/customer";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCustomerComponent} from "../delete-customer/delete-customer.component";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer [] = [];
  page: number = 1;
  search: any;

  constructor(private customerService: CustomerServiceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
    });
  }

  delete(id: any): void {
    this.customerService.getById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width: '500px',
        data: {customer: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
    this.page = 1;
  }

  searchCustomer() {
    this.customerService.search(this.search).subscribe(value => {
      this.customers = value;
      this.page = 1;
    })
  }
}
