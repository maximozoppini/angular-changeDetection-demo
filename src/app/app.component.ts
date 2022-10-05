import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Owner } from './owner';
import { Todo } from './todo';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Array<Todo> = [
    new Todo(1, 'TODO 1', false, new Owner('Enzo', 'Andreeeettto')),
    new Todo(1, 'TODO 2', false, new Owner('Omar', 'Arizmendi')),
    new Todo(1, 'TODO 3', false, new Owner('Hector', 'Hernandez')),
  ];

  message!: string;
  todos$!: Observable<Todo[]>;

  constructor(private service: TodosService) {
    this.todos$ = this.service.todos$;
  }

  toggleFirst() {
    this.todos[0].completed = !this.todos[0].completed;
  }

  addTodo() {
    let newTodos = this.todos.slice(0);
    newTodos.push(new Todo(1, 'TODO 4', false, new Owner('Maxi', 'Zoppini')));
    this.todos = newTodos;
  }

  addTodoAsync() {
    this.service.loadTodo(
      new Todo(1, 'TODO 4', false, new Owner('Maxi', 'Zoppini'))
    );
  }
}
