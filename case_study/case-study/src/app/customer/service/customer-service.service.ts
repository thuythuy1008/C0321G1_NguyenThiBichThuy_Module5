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
  public API_CUSTOMER_TYPE = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_CUSTOMER, customer);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API_CUSTOMER_TYPE);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_CUSTOMER + '/' + id);
  }

  getById(id): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER + '/' + id).pipe();
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(this.API_CUSTOMER + '/' + id, customer);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API_CUSTOMER + '/' + id);
  }

  search(name: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER +'?customerName_like=' + name);
  }
}

