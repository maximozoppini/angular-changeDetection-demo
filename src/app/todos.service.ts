import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Owner } from './owner';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosAsync: Array<Todo> = [
    new Todo(1, 'TODO 1', false, new Owner('Enzo', 'Andreeeettto')),
    new Todo(1, 'TODO 2', false, new Owner('Omar', 'Arizmendi')),
    new Todo(1, 'TODO 3', false, new Owner('Hector', 'Hernandez')),
  ];
  constructor() {}

  private subjectTodo = new BehaviorSubject<Todo[]>([...this.todosAsync]);

  public todos$: Observable<Todo[]> = this.subjectTodo.asObservable();

  loadTodo(todo: Todo) {
    this.todosAsync.push(todo);
    this.subjectTodo.next(this.todosAsync);
  }
}
