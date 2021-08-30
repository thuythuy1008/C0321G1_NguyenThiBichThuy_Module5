import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeServiceService} from "../../employee/service/employee-service.service";
import {ToastrService} from "ngx-toastr";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit {
  public id: number;
  public name: string;

  constructor(public dialogRef: MatDialogRef<DeleteServiceComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public serviceService: ServiceService, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.id = this.data.service.id;
    this.name = this.data.service.serviceName;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete() {
    this.serviceService.delete(this.id).subscribe(() => {
      this.dialogRef.close();
      this.alert();
    });
  }

  alert() {
    this.toast.success('Delete successfuly!!!', 'title');
  }
}
