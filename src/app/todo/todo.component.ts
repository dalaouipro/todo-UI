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
  }
  

  deleteTodo(id: number) {
    this.service.deleteTodo(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  
  switchComplete(todo: Todo) {
    if(todo.isComplete==false){
      this.service.markTodoCompleted(todo.id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
    else{
      this.service.markTodoUncompleted(todo.id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }


}
