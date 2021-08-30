import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerServiceService} from "../service/customer-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  public id: number;
  public name: string;

  constructor(public dialogRef: MatDialogRef<DeleteCustomerComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public customerService: CustomerServiceService, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.id = this.data.customer.id;
    this.name = this.data.customer.customerName;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete() {
    this.customerService.delete(this.id).subscribe(() => {
      this.dialogRef.close();
      this.alert();
    });
  }

  alert() {
    this.toast.success('Delete successfuly!!!', 'title');
  }
}
