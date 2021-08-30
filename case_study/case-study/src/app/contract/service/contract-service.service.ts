import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";
import {Customer} from "../../customer/model/customer";
import {CustomerType} from "../../customer/model/customer-type";
import {Employee} from "../../employee/model/employee";
import {Service} from "../../service/model/service";

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {
  public API_CONTRACT = 'http://localhost:3000/contract';
  public API_CUSTOMER = 'http://localhost:3000/customer';
  public API_EMPLOYEE = 'http://localhost:3000/employee';
  public API_SERVICE = 'http://localhost:3000/service';

  constructor(private http: HttpClient) {
  }

  getAllContract(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.API_CONTRACT);
  }

  saveContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(this.API_CONTRACT, contract);
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER);
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_EMPLOYEE);
  }

  getAllService(): Observable<Service[]> {
    return this.http.get<Service[]>(this.API_SERVICE);
  }

  findById(id: number): Observable<Contract> {
    return this.http.get<Contract>(this.API_CONTRACT + '/' + id);
  }

  getById(id): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.API_CONTRACT + '/' + id).pipe();
  }

  updateContract(id: number, contract: Contract): Observable<Contract> {
    return this.http.patch<Contract>(this.API_CONTRACT + '/' + id, contract);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API_CONTRACT + '/' + id);
  }

  // search(name: string): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(this.API_CUSTOMER +'?customerName_like=' + name);
  // }
}
