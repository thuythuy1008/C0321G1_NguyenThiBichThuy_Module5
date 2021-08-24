import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeServiceService} from "../service/employee-service.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employee: EmployeeServiceService) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.employee.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }
}
