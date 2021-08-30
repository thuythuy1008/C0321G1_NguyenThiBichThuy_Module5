import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ContractServiceService} from "../../contract/service/contract-service.service";
import {ToastrService} from "ngx-toastr";
import {ContractDetailService} from "../service/contract-detail.service";

@Component({
  selector: 'app-delete-contract-detail',
  templateUrl: './delete-contract-detail.component.html',
  styleUrls: ['./delete-contract-detail.component.css']
})
export class DeleteContractDetailComponent implements OnInit {
  public id: number;
  // public name: string;

  constructor(public dialogRef: MatDialogRef<DeleteContractDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public contractDetailService: ContractDetailService, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.id = this.data.contractDetail.id;
    // this.name = this.data.contract.c;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete() {
    this.contractDetailService.delete(this.id).subscribe(() => {
      this.dialogRef.close();
      this.alert();
    });
  }

  alert() {
    this.toast.success('Delete successfuly!!!', 'title');
  }
}
