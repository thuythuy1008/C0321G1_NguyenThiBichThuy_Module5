import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "../model/service";
import {RenType} from "../model/ren-type";
import {ServiceType} from "../model/service-type";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public API_SERVICE = 'http://localhost:3000/service';
  public API_REN_TYPE = 'http://localhost:3000/renType';
  public API_SERVICE_TYPE = 'http://localhost:3000/serviceType';

  constructor(private http: HttpClient) {
  }

  getAllService(): Observable<Service[]> {
    return this.http.get<Service[]>(this.API_SERVICE);
  }

  saveService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.API_SERVICE, service);
  }

  getAllRenType(): Observable<RenType[]> {
    return this.http.get<RenType[]>(this.API_REN_TYPE);
  }

  getAllServiceType(): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>(this.API_SERVICE_TYPE);
  }

  findById(id: number): Observable<Service> {
    return this.http.get<Service>(this.API_SERVICE + '/' + id);
  }

  getById(id): Observable<Service[]> {
    return this.http.get<Service[]>(this.API_SERVICE + '/' + id).pipe();
  }

  updateService(id: number, service: Service): Observable<Service> {
    return this.http.patch<Service>(this.API_SERVICE + '/' + id, service);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API_SERVICE + '/' + id);
  }

  search(name: string): Observable<Service[]> {

    return this.http.get<Service[]>(this.API_SERVICE +'?employeeName_like=' + name);
  }
}
