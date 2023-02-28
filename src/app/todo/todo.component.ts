import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'app/models/Todo';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientService} from '../service/http-client.service';


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
    this.service.deleteTodo(id).subscribe({
      next : (data) => {
        console.log(data);
        this.reloadData();
      },
      error : (e) => console.log(e),
    });
  }

  findTodo(id:number, title:string) {
    this.router.navigate(['/update'], { queryParams: { id: id, title:title } });
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