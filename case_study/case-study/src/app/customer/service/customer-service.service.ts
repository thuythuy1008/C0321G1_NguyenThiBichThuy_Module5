import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer');
  }
}

