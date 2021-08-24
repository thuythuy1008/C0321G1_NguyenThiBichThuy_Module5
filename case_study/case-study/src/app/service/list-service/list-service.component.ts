import {Component, OnInit} from '@angular/core';
import {Service} from "../model/service";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  services: Service[] = [];

  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.service.getAllService().subscribe(data => {
      this.services = data;
    });
  }
}
