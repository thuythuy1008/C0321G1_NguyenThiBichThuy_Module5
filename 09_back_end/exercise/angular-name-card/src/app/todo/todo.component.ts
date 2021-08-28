import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {TodoService} from "../service/todo.service";
import {DeleteTodoComponent} from "../delete-todo/delete-todo.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(public todoService: TodoService, public dialog: MatDialog, public router: Router) {
  }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.todoService.getAll().subscribe(data => {
      this.todos = data;
      console.log(this.todos);
    });
  }

  toggleTodo(i: number) {
    const todo = this.todos[i];
    todo.complete = !todo.complete;
    this.todoService.edit(this.todos[i], this.todos[i].id).subscribe(next => {
      this.todos[i].complete = next.complete;
    });
  }

  delete(id: any): void {
    console.log(id);
    this.todoService.getById(id).subscribe(dataDialog => {
      console.log(dataDialog);
      const dialogRef = this.dialog.open(DeleteTodoComponent, {
        width: '500px',
        data: {name: dataDialog},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
