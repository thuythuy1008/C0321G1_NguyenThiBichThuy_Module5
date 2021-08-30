import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContractDetail} from "../model/contract-detail";
import {Contract} from "../../contract/model/contract";
import {Customer} from "../../customer/model/customer";
import {Employee} from "../../employee/model/employee";
import {Service} from "../../service/model/service";
import {AttachService} from "../model/attach-service";

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {
  public API_CONTRACT_DETAIL = 'http://localhost:3000/contractDetail';
  public API_CONTRACT = 'http://localhost:3000/contract';
  public API_ATTACH_SERVICE = 'http://localhost:3000/attachService';

  constructor(private http: HttpClient) {
  }

  getAllContractDetail(): Observable<ContractDetail[]> {
    return this.http.get<ContractDetail[]>(this.API_CONTRACT_DETAIL);
  }

  saveContractDetail(contractDetail: ContractDetail): Observable<Contract> {
    return this.http.post<Contract>(this.API_CONTRACT_DETAIL, contractDetail);
  }

  getAllContract(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.API_CONTRACT);
  }

  getAllAttachService(): Observable<AttachService[]> {
    return this.http.get<AttachService[]>(this.API_ATTACH_SERVICE);
  }

  findById(id: number): Observable<ContractDetail> {
    return this.http.get<ContractDetail>(this.API_CONTRACT_DETAIL + '/' + id);
  }

  getById(id): Observable<ContractDetail[]> {
    return this.http.get<ContractDetail[]>(this.API_CONTRACT_DETAIL + '/' + id).pipe();
  }

  updateContractDetail(id: number, contractDetail: ContractDetail): Observable<ContractDetail> {
    return this.http.patch<ContractDetail>(this.API_CONTRACT_DETAIL + '/' + id, contractDetail);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API_CONTRACT_DETAIL + '/' + id);
  }
}
