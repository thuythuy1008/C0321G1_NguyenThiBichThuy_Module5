import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customer-type";
import {CustomerServiceService} from "../service/customer-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  id: number;
  customerTypes: CustomerType[] = [];
  editForm: FormGroup;

  constructor(private customerService: CustomerServiceService, private router: Router,
              private toast: ToastrService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.formEdit();
    this.getData();
    // this.setCustomer();
  }

  formEdit() {
    this.editForm = new FormGroup({
      id: new FormControl(''),
      customerCode: new FormControl('',
        [Validators.required, Validators.pattern('^(KH)-[0-9]{4}$')]),
      customerName: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      customerBirthday: new FormControl('', [Validators.required, this.check]),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('',
        [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
      customerPhone: new FormControl('',
        [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
      customerEmail: new FormControl('',
        [Validators.required, Validators.email]),
      customerAddress: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      customerType: new FormControl('', Validators.required)
    })
  }

  getData() {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypes = value;
      this.customerService.findById(this.id).subscribe(value => {
        this.editForm.setValue(value);
      });
    })
  }

  // setCustomer() {
//   this.customerService.findById(this.id).subscribe(value => {
//   this.editForm.setValue(value);
// });
  // }

  submitForm() {
    const customer = this.editForm.value;
    this.customerService.updateCustomer(customer.id, customer).subscribe(() => {
      this.router.navigateByUrl('/customer-list');
      this.alert();
    });
  }

  check(birthDay: AbstractControl): any {
    const confim = birthDay.value;
    const inputYear = Number(confim.substr(0, 4));
    const currentYear = new Date().getFullYear();
    return currentYear - inputYear >= 18 ? null : {invalid: true};
  }

  alert() {
    this.toast.success('Edit successfuly!!!', 'title');
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
