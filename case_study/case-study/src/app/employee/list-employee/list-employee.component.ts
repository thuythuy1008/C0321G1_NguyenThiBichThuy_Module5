import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeServiceService} from "../service/employee-service.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteEmployeeComponent} from "../delete-employee/delete-employee.component";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  page: number = 1;
  search: any;

  constructor(private employeeService: EmployeeServiceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  delete(id: any): void {
    this.employeeService.getById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
        width: '500px',
        data: {employee: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
    this.page = 1;
  }

  searchEmployee() {
    this.employeeService.search(this.search).subscribe(value => {
      this.employees = value;
      this.page = 1;
    })
  }
}
