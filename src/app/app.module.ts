import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListPushComponent } from './todo-list-push/todo-list-push.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoListPushComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
