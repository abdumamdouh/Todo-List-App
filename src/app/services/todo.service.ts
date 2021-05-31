// the Injectable allow us to inject this service into the constructor of different components
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
// headers because when we will send data to the server we make sure that the content type is json
// and to use this we must inject it to the constructor
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// The Todo Service defines such headers in an httpOptions object that are passed to every HttpClient save method.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // the url itself returns 100 todo item we could limit it by another proerty
  APIurl: string = 'https://jsonplaceholder.typicode.com/todos';
  limit: string = '?_limit=5';

  constructor(private http: HttpClient) {}

  // we are using this service for data and for a shared mehods to all the components

  getTodo(): Observable<Todo[]> {
    // making get request from the API using HttpClient module
    // we will declare the url of the API as a property to the service class
    //get request
    return this.http.get<Todo[]>(`${this.APIurl}${this.limit}`);
  }

  // we used any because the return will not be formatted as a Todo
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.APIurl}/${todo.id}`;
    // httpOption is gonna include the headers data
    return this.http.put<any>(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.APIurl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.APIurl, todo, httpOptions);
  }
}
