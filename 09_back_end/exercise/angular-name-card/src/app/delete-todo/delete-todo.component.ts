import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {
  public todoName: string;
  public todoId: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoName = this.data.name.content;
    this.todoId = this.data.name.id;
    console.log(this.todoName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.todoService.delete(this.todoId).subscribe(dataDialog => {
      this.dialogRef.close();
    });
  }
}
