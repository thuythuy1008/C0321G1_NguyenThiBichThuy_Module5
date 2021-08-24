import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "../model/service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  getAllService(): Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:3000/service');
  }
}
