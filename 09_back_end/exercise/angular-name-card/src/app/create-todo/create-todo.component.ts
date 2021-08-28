import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../service/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  public todoForm: FormGroup;

  constructor(public todoService: TodoService, public router: Router) {
  }

  ngOnInit(): void {
    this.initfrom();
  }

  initfrom() {
    this.todoForm = new FormGroup({
      content: new FormControl(),
      complete: new FormControl(false),
    });
  }

  create() {
    this.todoService.create(this.todoForm.value).subscribe(data => {
      this.router.navigateByUrl('/list');
    });
  }
}
