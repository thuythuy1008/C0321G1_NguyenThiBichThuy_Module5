import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  public API_CUSTOMER = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER);
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_CUSTOMER, customer);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API_CUSTOMER);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.API_CUSTOMER}/${id}`);
  }

  updateCustomer(id, customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.API_CUSTOMER}/${id}`, customer);
  }
}

