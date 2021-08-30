import {Component, OnInit} from '@angular/core';
import {RenType} from "../model/ren-type";
import {ServiceType} from "../model/service-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeServiceService} from "../../employee/service/employee-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  id: number;
  renTypes: RenType[] = [];
  serviceTypes: ServiceType[] = [];
  editForm: FormGroup;

  constructor(private serviceService: ServiceService, private router: Router,
              private toast: ToastrService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.formEdit();
    this.getRenType();
    this.getServiceType();
    this.setService();
  }

  formEdit(){
    this.editForm = new FormGroup({
      id: new FormControl(''),
      serviceCode: new FormControl('',
        [Validators.required, Validators.pattern('^(DV)-[0-9]{4}$')]),
      serviceName: new FormControl('',
        [Validators.required,
          Validators.pattern('^([A-Z][a-z0-9]*[\s]?)+$')]),
      serviceArea: new FormControl('', [Validators.required, Validators.min(0)]),
      serviceCost: new FormControl('', [Validators.required, Validators.min(0)]),
      serviceMaxPeople: new FormControl('', [Validators.required, Validators.min(0)]),
      standardRoom: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      descriptionOtherConvenience: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      poolArea: new FormControl('', [Validators.required, Validators.min(0)]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.min(0)]),
      renType: new FormControl('', Validators.required),
      serviceType: new FormControl('', Validators.required)
    });
  }

  getRenType() {
    this.serviceService.getAllRenType().subscribe(data => {
      this.renTypes = data;
    })
  }

  getServiceType() {
    this.serviceService.getAllServiceType().subscribe(data => {
      this.serviceTypes = data;
    })
  }

  setService(){
    this.serviceService.findById(this.id).subscribe(value => {
      this.editForm.setValue(value);
    });
  }

  submitForm() {
    const service = this.editForm.value;
    this.serviceService.updateService(service.id, service).subscribe(() => {
      this.router.navigateByUrl('/service-list');
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
