import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {
  constructor(private http: HttpClient) {
  }

  getAllContract(): Observable<Contract[]> {
    return this.http.get<Contract[]>('http://localhost:3000/contract');
  }
}
