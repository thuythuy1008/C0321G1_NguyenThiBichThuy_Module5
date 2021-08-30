import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../customer/model/customer-type";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../customer/service/customer-service.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Customer} from "../../customer/model/customer";
import {Employee} from "../../employee/model/employee";
import {Service} from "../../service/model/service";
import {ContractServiceService} from "../service/contract-service.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  customers: Customer[] = [];
  employees: Employee[] = [];
  services: Service[] = [];
  createForm: FormGroup;

  constructor(private contractService: ContractServiceService, private router: Router, private toast: ToastrService) {
    this.createForm = new FormGroup({
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

  ngOnInit(): void {
    this.getCustomer();
    this.getEmployee();
    this.getService();
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

  submitForm() {
    const contract = this.createForm.value;
    this.contractService.saveContract(contract).subscribe(() => {
      this.router.navigateByUrl('/contract-list');
      this.alert();
    })
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

  alert() {
    this.toast.success('Create successfuly!!!', 'title');
  }
}
