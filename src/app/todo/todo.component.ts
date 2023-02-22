import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientService, Todo } from '../service/http-client.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos!: Observable<Todo[]>;
   
  constructor(private service: HttpClientService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.todos = this.service.getTodos();
    console.log(this.todos);
  }
  

  deleteTodo(id: number) {
    this.service.deleteTodo(id).subscribe({
      next : (data) => {
        console.log(data);
        this.reloadData();
      },
      error : (e) => console.log(e),
    });
  }
  
  switchComplete(todo: Todo) {
    if(!todo.complete){
      this.service.markTodoCompleted(todo.id).subscribe({
          next : (data) => {
            console.log(data);
            this.reloadData();
          },
          error : (e) => console.log(e),
        });
      }
    else{
      this.service.markTodoUncompleted(todo.id)
        .subscribe({
          next : (data) => {
            console.log(data);
            this.reloadData();
          },
          error : (e) => console.log(e),
      });
    }
  }
}