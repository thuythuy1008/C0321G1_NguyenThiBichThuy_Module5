import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContractDetail} from "../model/contract-detail";

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {
  constructor(private http: HttpClient) {
  }

  getAllContractDetail(): Observable<ContractDetail[]> {
    return this.http.get<ContractDetail[]>('http://localhost:3000/contractDetail');
  }
}
