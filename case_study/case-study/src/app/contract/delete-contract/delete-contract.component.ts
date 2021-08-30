import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeServiceService} from "../../employee/service/employee-service.service";
import {ToastrService} from "ngx-toastr";
import {ContractServiceService} from "../service/contract-service.service";

@Component({
  selector: 'app-delete-contract',
  templateUrl: './delete-contract.component.html',
  styleUrls: ['./delete-contract.component.css']
})
export class DeleteContractComponent implements OnInit {
  public id: number;
  // public name: string;

  constructor(public dialogRef: MatDialogRef<DeleteContractComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public contractService: ContractServiceService, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.id = this.data.contract.id;
    // this.name = this.data.contract.c;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete() {
    this.contractService.delete(this.id).subscribe(() => {
      this.dialogRef.close();
      this.alert();
    });
  }

  alert() {
    this.toast.success('Delete successfuly!!!', 'title');
  }
}
