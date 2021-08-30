import {Component, OnInit} from '@angular/core';
import {Service} from "../model/service";
import {ServiceService} from "../service/service.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteServiceComponent} from "../delete-service/delete-service.component";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  services: Service[] = [];
  page: number = 1;
  search: any;

  constructor(private service: ServiceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.service.getAllService().subscribe(data => {
      this.services = data;
    });
  }


  delete(id: any): void {
    this.service.getById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteServiceComponent, {
        width: '500px',
        data: {service: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
    this.page = 1;
  }

  searchService() {
    this.service.search(this.search).subscribe(value => {
      this.services = value;
      this.page = 1;
    })
  }
}
