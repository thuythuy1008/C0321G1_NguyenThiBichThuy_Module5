import {Component, OnInit} from '@angular/core';
import {Position} from "../model/position";
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../customer/service/customer-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {EmployeeServiceService} from "../service/employee-service.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: number;
  positions: Position[] = [];
  divisions: Division[] = [];
  educationDegrees: EducationDegree[] = [];
  editForm: FormGroup;

  constructor(private employeeService: EmployeeServiceService, private router: Router,
              private toast: ToastrService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.formEdit();
    this.getPosition();
    this.getDivision();
    this.getEducationDegree();
    this.setEmployee();
  }

  formEdit() {
    this.editForm = new FormGroup({
      id: new FormControl(''),
      employeeName: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      employeeBirthday: new FormControl('', [Validators.required, this.check]),
      employeeIdCard: new FormControl('',
        [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
      employeeSalary: new FormControl('', [Validators.required, Validators.min(0)]),
      employeePhone: new FormControl('',
        [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
      employeeEmail: new FormControl('',
        [Validators.required, Validators.email]),
      employeeAddress: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      position: new FormControl('', Validators.required),
      division: new FormControl('', Validators.required),
      educationDegree: new FormControl('', Validators.required)
    });
  }

  check(birthDay: AbstractControl): any {
    const confim = birthDay.value;
    const inputYear = Number(confim.substr(0, 4));
    const currentYear = new Date().getFullYear();
    return currentYear - inputYear >= 18 ? null : {invalid: true};
  }

  getPosition() {
    this.employeeService.getAllPosition().subscribe(data => {
      this.positions = data;
    })
  }

  getDivision() {
    this.employeeService.getAllDivision().subscribe(data => {
      this.divisions = data;
    })
  }

  getEducationDegree() {
    this.employeeService.getAllEducationDegree().subscribe(data => {
      this.educationDegrees = data;
    })
  }

  setEmployee(){
    this.employeeService.findById(this.id).subscribe(value => {
      this.editForm.setValue(value);
    });
  }

  submitForm() {
    const employee = this.editForm.value;
    this.employeeService.updateEmployee(employee.id, employee).subscribe(() => {
      this.router.navigateByUrl('/employee-list');
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
