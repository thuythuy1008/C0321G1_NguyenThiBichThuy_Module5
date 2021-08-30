import {Component, OnInit} from '@angular/core';
import {Contract} from "../model/contract";
import {ContractServiceService} from "../service/contract-service.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteContractComponent} from "../delete-contract/delete-contract.component";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[] = [];
  page: number = 1;
  // search: any;

  constructor(private contractService: ContractServiceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.contractService.getAllContract().subscribe(data => {
      this.contracts = data;
    });
  }

  delete(id: any): void {
    this.contractService.getById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteContractComponent, {
        width: '500px',
        data: {contract: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
    this.page = 1;
  }

  // searchCustomer() {
  //   this.contractService.search(this.search).subscribe(value => {
  //     this.customers = value;
  //     this.page = 1;
  //   })
  // }
}
