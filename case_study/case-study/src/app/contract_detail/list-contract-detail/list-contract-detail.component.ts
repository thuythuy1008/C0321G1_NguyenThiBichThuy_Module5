import {Component, OnInit} from '@angular/core';
import {ContractDetail} from "../model/contract-detail";
import {ContractDetailService} from "../service/contract-detail.service";

@Component({
  selector: 'app-list-contract-detail',
  templateUrl: './list-contract-detail.component.html',
  styleUrls: ['./list-contract-detail.component.css']
})
export class ListContractDetailComponent implements OnInit {
  contractDetails: ContractDetail[] = [];

  constructor(private contractDetail: ContractDetailService) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.contractDetail.getAllContractDetail().subscribe(data => {
      this.contractDetails = data;
    });
  }
}
