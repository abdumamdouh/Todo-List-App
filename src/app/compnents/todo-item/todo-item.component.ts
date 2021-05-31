import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  //define the input property to this component comming from todos component //its father component, from todos to todo-item
  @Input() todo: Todo;
  //define the output of this component // the event we're emitting
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
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
    // UI Toggle
    todo.completed = !todo.completed;
    // API Toggle using post method from TodoService
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  onDelete(todo: Todo): void {
    // to delete an todo item first we need to delete it from the UI aka from the todos array in the parent component & to delete it from the API
    // we need to emit the event to the parent component to handle the delete from the UI
    // emit up the event to todos component
    this.deleteTodo.emit(todo);
  }
}
