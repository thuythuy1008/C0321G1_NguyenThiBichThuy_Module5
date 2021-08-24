import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) {
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employee');
  }
}
