import {Component, OnInit} from '@angular/core';
import {Contract} from "../model/contract";
import {ContractServiceService} from "../service/contract-service.service";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[] = [];

  constructor(private contract: ContractServiceService) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.contract.getAllContract().subscribe(data => {
      this.contracts = data;
    });
  }
}
