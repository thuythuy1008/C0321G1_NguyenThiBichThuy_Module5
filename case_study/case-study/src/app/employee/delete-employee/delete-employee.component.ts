import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {EmployeeServiceService} from "../service/employee-service.service";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  public id: number;
  public name: string;

  constructor(public dialogRef: MatDialogRef<DeleteEmployeeComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public employeeService: EmployeeServiceService, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.id = this.data.employee.id;
    this.name = this.data.employee.employeeName;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete() {
    this.employeeService.delete(this.id).subscribe(() => {
      this.dialogRef.close();
      this.alert();
    });
  }

  alert() {
    this.toast.success('Delete successfuly!!!', 'title');
  }
}
