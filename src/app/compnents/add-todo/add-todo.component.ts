import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  // declare output of this component the oblect we're emitting
  // we used any because it has no id because we will make post request
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  // when you have a form inputs you have assign those as properties to the component

  title: string = '';

  constructor() {}

  ngOnInit(): void {}

  // ou submit we want to add this todo to the UI and post request the server
  onSubmit(): void {
    // we will construct the todo, with no id because most of APIs orivides the id
    const todo = {
      title: this.title,
      completed: false,
    };

    //we will emit this up to the todos component so we could push it into the todos array
    // notice that we are emitting to the parent component
    this.addTodo.emit(todo);
  }
}
