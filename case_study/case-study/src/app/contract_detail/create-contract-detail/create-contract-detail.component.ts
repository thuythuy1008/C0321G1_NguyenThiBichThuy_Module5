import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Contract} from "../../contract/model/contract";
import {AttachService} from "../model/attach-service";
import {ContractDetailService} from "../service/contract-detail.service";

@Component({
  selector: 'app-create-contract-detail',
  templateUrl: './create-contract-detail.component.html',
  styleUrls: ['./create-contract-detail.component.css']
})
export class CreateContractDetailComponent implements OnInit {
  contracts: Contract[] = [];
  attachServices: AttachService[] = [];
  createForm: FormGroup;

  constructor(private contractDetailService: ContractDetailService, private router: Router, private toast: ToastrService) {
    this.createForm = new FormGroup({
      contract: new FormControl('', Validators.required),
      attachService: new FormControl('', Validators.required),
      quantity: new FormControl('',[Validators.required, Validators.min(0)])
    });
  }

  ngOnInit(): void {
    this.getContract();
    this.getAttachService();
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

  submitForm() {
    const contractDetail = this.createForm.value;
    this.contractDetailService.saveContractDetail(contractDetail).subscribe(() => {
      this.router.navigateByUrl('/contract-detail-list');
      this.alert();
    })
  }

  alert() {
    this.toast.success('Create successfuly!!!', 'title');
  }
}
