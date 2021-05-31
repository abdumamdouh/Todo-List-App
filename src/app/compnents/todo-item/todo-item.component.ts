import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  //define the input property to this component comming from todos component //its father component
  @Input() todo: Todo;

  constructor() {
    this.todo = {
      id: 0,
      title: '',
      completed: false,
    };
  }

  ngOnInit(): void {}

  setClasses() {
    // returning an object holding the css classes we want to add to a certain tag
    // if it's true then we will add it and if it false we will not add it
    return {
      todo: true,
      'is-complete': this.todo.completed,
    };
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  onDelete(todo: Todo): void {}
}
