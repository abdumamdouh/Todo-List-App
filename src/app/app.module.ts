import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// enable the HttpClientModule so we could import it and use it in different components
import { HttpClientModule } from '@angular/common/http';
// enable the Forms Module so we could import it and use it in different components
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './compnents/todos/todos.component';
import { TodoItemComponent } from './compnents/todo-item/todo-item.component';
import { HeaderComponent } from './compnents/layout/header/header.component';
import { AddTodoComponent } from './compnents/add-todo/add-todo.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
