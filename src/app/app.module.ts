import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// enable the HttpClientModule so we could import it and use it in different components
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './compnents/todos/todos.component';
import { TodoItemComponent } from './compnents/todo-item/todo-item.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
