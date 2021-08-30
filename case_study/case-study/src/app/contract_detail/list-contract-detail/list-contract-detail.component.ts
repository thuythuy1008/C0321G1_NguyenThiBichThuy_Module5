import {Component, OnInit} from '@angular/core';
import {ContractDetail} from "../model/contract-detail";
import {ContractDetailService} from "../service/contract-detail.service";
import {Contract} from "../../contract/model/contract";
import {ContractServiceService} from "../../contract/service/contract-service.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteContractComponent} from "../../contract/delete-contract/delete-contract.component";
import {DeleteContractDetailComponent} from "../delete-contract-detail/delete-contract-detail.component";

@Component({
  selector: 'app-list-contract-detail',
  templateUrl: './list-contract-detail.component.html',
  styleUrls: ['./list-contract-detail.component.css']
})
export class ListContractDetailComponent implements OnInit {
  contractDetails: ContractDetail[] = [];
  page: number = 1;

  constructor(private contractDetailService: ContractDetailService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.contractDetailService.getAllContractDetail().subscribe(data => {
      this.contractDetails = data;
    });
  }

  delete(id: any): void {
    this.contractDetailService.getById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteContractDetailComponent, {
        width: '500px',
        data: {contractDetail: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
    this.page = 1;
  }
}
