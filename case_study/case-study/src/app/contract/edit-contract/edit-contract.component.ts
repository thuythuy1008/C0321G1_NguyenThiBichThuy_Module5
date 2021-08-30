import {Component, OnInit} from '@angular/core';
import {Position} from "../../employee/model/position";
import {Division} from "../../employee/model/division";
import {EducationDegree} from "../../employee/model/education-degree";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeServiceService} from "../../employee/service/employee-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Customer} from "../../customer/model/customer";
import {Employee} from "../../employee/model/employee";
import {Service} from "../../service/model/service";
import {ContractServiceService} from "../service/contract-service.service";

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})
export class EditContractComponent implements OnInit {
  id: number;
  customers: Customer[] = [];
  employees: Employee[] = [];
  services: Service[] = [];
  editForm: FormGroup;

  constructor(private contractService: ContractServiceService, private router: Router,
              private toast: ToastrService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.formEdit();
    this.getCustomer();
    this.getEmployee();
    this.getService();
    this.setContract();
  }

  formEdit() {
    this.editForm = new FormGroup({
      id: new FormControl(''),
      dateGroup: new FormGroup({
        contractStartDate: new FormControl('', [Validators.required, this.checkStartDay]),
        contractEndDate: new FormControl('', [Validators.required]),
      }, this.checkEndDay),
      moneyGroup: new FormGroup({
        contractDeposit: new FormControl('', [Validators.required, Validators.min(0)]),
        contractTotalMoney: new FormControl('', [Validators.required, Validators.min(0)]),
      }, this.check),
      employee: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      service: new FormControl('', Validators.required),
    });
  }

  checkStartDay(startDay: AbstractControl): any {
    const confim = startDay.value;
    const inputYear = Number(confim.substr(0, 4));
    const inputMonth = Number(confim.substr(5, 2));
    const inputDay = Number(confim.substr(8, 2));
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    return inputYear - currentYear >= 0 ? (inputMonth - currentMonth >= 0 ? (inputDay - currentDay >= 0 ? null : {invalid: true}) : {invalid: true}) : {invalid: true};
  }

  checkEndDay(endDay: AbstractControl): any {
    const confim = endDay.value;
    return Number(confim.contractEndDate.substr(0, 4)) - Number(confim.contractStartDate.substr(0, 4))
    >= 0 ? (Number(confim.contractEndDate.substr(5, 2)) - Number(confim.contractStartDate.substr(5, 2))
    >= 0 ? (Number(confim.contractEndDate.substr(8, 2)) - Number(confim.contractStartDate.substr(8, 2))
    > 0 ? null : {invalidCheckEndDay: true}) : {invalidCheckEndDay: true}) : {invalidCheckEndDay: true};
  }

  check(money: AbstractControl): any {
    const confim = money.value;
    return confim.contractTotalMoney - confim.contractDeposit >= 0 ? null : {invalid: true};
  }

  getCustomer() {
    this.contractService.getAllCustomer().subscribe(data => {
      this.customers = data;
    });
  }

  getEmployee() {
    this.contractService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  getService() {
    this.contractService.getAllService().subscribe(data => {
      this.services = data;
    });
  }

  setContract() {
    this.contractService.findById(this.id).subscribe(value => {
      this.editForm.setValue(value);
    });
  }

  submitForm() {
    const contract = this.editForm.value;
    this.contractService.updateContract(contract.id, contract).subscribe(() => {
      this.router.navigateByUrl('/contract-list');
      this.alert();
    });
  }

  alert() {
    this.toast.success('Edit successfuly!!!', 'title');
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
