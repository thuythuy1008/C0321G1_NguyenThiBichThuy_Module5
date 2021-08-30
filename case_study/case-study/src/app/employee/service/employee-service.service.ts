import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";
import {Position} from "../model/position";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  public API_EMPLOYEE = 'http://localhost:3000/employee';
  public API_POSITION = 'http://localhost:3000/position';
  public API_DIVISION = 'http://localhost:3000/division';
  public API_EDUCATION_DEGREE = 'http://localhost:3000/educationDegree';

  constructor(private http: HttpClient) {
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_EMPLOYEE);
  }


  saveEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.API_EMPLOYEE, employee);
  }

  getAllPosition(): Observable<Position[]> {
    return this.http.get<Position[]>(this.API_POSITION);
  }

  getAllDivision(): Observable<Division[]> {
    return this.http.get<Division[]>(this.API_DIVISION);
  }

  getAllEducationDegree(): Observable<EducationDegree[]> {
    return this.http.get<EducationDegree[]>(this.API_EDUCATION_DEGREE);
  }

  findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.API_EMPLOYEE + '/' + id);
  }

  getById(id): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_EMPLOYEE + '/' + id).pipe();
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.patch<Employee>(this.API_EMPLOYEE + '/' + id, employee);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API_EMPLOYEE + '/' + id);
  }

  search(name: string): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.API_EMPLOYEE +'?serviceName_like=' + name);
  }
}
