import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
// importing the Todo class to use it in Todos component
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  //use constructor to inject the dependencies only
  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  // ngOnInit behaves like the constructor, it's a lifecylce method to run when the component is generated
  ngOnInit(): void {
    // todos data to use in this app
    // this is async function so first we call it using the todoService then it returns an observable of type Todo[]
    // so we need to subscribe to this observabe and then we decide what we will do with this data, we want to assign it to the Todo[]
    this.todoService.getTodo().subscribe((todos) => (this.todos = todos));
  }

  deleteTodo(todo: Todo): void {
    // delete from the UI
    // using filter which filter an array and return the filterd one
    this.todos = this.todos.filter((t) => t.id != todo.id);
    // delete from the API using the service file
    this.todoService.deleteTodo(todo).subscribe();
  }
}
