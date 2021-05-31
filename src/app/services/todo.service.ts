// the Injectable allow us to inject this service into the constructor of different components
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  // we are using this service for data and for a shared mehods to all the components

  getTodo(): Todo[] {
    return [
      {
        id: 1,
        title: 'Finish the course',
        completed: false,
      },
      {
        id: 2,
        title: 'Finish the stack section',
        completed: false,
      },
      {
        id: 3,
        title: 'take the bills',
        completed: true,
      },
    ];
  }
}
