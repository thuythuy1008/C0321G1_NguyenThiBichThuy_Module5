import {Component, OnInit} from '@angular/core';
import {Contract} from "../../contract/model/contract";
import {AttachService} from "../model/attach-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ContractDetailService} from "../service/contract-detail.service";

@Component({
  selector: 'app-edit-contract-detail',
  templateUrl: './edit-contract-detail.component.html',
  styleUrls: ['./edit-contract-detail.component.css']
})
export class EditContractDetailComponent implements OnInit {
  id: number;
  contracts: Contract[] = [];
  attachServices: AttachService[] = [];
  editForm: FormGroup;

  constructor(private contractDetailService: ContractDetailService, private router: Router,
              private toast: ToastrService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.formEdit();
    this.getContract();
    this.getAttachService();
    this.setContractDetail();
  }

  formEdit(){
    this.editForm = new FormGroup({
      id: new FormControl(''),
      contract: new FormControl('', Validators.required),
      attachService: new FormControl('', Validators.required),
      quantity: new FormControl('',[Validators.required, Validators.min(0)])
    });
  }

  getContract() {
    this.contractDetailService.getAllContract().subscribe(data => {
      this.contracts = data;
    })
  }

  getAttachService() {
    this.contractDetailService.getAllAttachService().subscribe(data => {
      this.attachServices = data;
    })
  }

  setContractDetail() {
    this.contractDetailService.findById(this.id).subscribe(value => {
      this.editForm.setValue(value);
    });
  }

  submitForm() {
    const contractDetail = this.editForm.value;
    this.contractDetailService.updateContractDetail(contractDetail.id, contractDetail).subscribe(() => {
      this.router.navigateByUrl('/contract-detail-list');
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
