import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from 'app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http:HttpClient) { }

  
  private baseUrl = 'http://localhost:8080/api/v1';

  getTodos(): Observable<any> { return this.http.get(`${this.baseUrl}/listTodos`); }
  findTodo(id:number): Observable<Object> { return this.http.get<Todo>(`${this.baseUrl}/findTodo/${id}`);}
  createTodo(title:string): Observable<Object> { return this.http.post<Todo>(`${this.baseUrl}/createTodo`,title);}
  updateTodo(id:number, title:string): Observable<Object> { return this.http.put<Todo>(`${this.baseUrl}/findTodo/${id}`, title);}
  deleteTodo(id: number): Observable<Object> { return this.http.delete<Todo>(`${this.baseUrl}/deleteTodo/${id}`);}
  markTodoCompleted(id: number): Observable<Object> { return this.http.put<Todo>(`${this.baseUrl}/markTodoCompleted/${id}`, null);}
  markTodoUncompleted(id: number): Observable<Object> { return this.http.put<Todo>(`${this.baseUrl}/markTodoUncompleted/${id}`, null);}
}
