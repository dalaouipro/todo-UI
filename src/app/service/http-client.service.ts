import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export class Todo{
  constructor(
    public id:number,
    public title:string,
    public complete:boolean,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http:HttpClient) { }

  getTodos(): Observable<any> { return this.http.get('http://localhost:8080/listTodos'); }

  createTodo(body: String): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/createTodo', body);}
  deleteTodo(id: number): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/deleteTodo', id);}
  markTodoCompleted(id: number): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/markTodoCompleted', id);}
  markTodoUncompleted(id: number): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/markTodoUncompleted', id);}
}
