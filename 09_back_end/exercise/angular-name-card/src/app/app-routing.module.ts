import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {CreateTodoComponent} from "./create-todo/create-todo.component";
import {EditTodoComponent} from "./edit-todo/edit-todo.component";


const routes: Routes = [
  {path: 'list', component: TodoComponent},
  {path: 'create', component: CreateTodoComponent},
  {path: 'edit/:id', component: EditTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
