import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from 'app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http:HttpClient) { }

  getTodos(): Observable<any> { return this.http.post('http://localhost:8080/listTodos', null); }

  createTodo(title:string): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/createTodo', title);}
  findTodo(id:number): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/findTodo', id);}
  updateTodo(id:number, title:string): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/findTodo', {id, title});}
  deleteTodo(id: number): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/deleteTodo', id);}
  markTodoCompleted(id: number): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/markTodoCompleted', id);}
  markTodoUncompleted(id: number): Observable<Object> { return this.http.post<Todo>('http://localhost:8080/markTodoUncompleted', id);}
}
