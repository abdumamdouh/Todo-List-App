import { Component, OnInit } from '@angular/core';
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
    this.todos = this.todoService.getTodo();
  }
}
