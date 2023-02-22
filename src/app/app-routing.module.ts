import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path : 'todos', component: TodoComponent },
  { path: 'add', component: TodoCreateComponent },
  { path: 'update', component: TodoUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
