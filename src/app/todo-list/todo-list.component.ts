import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  todos!: Array<Todo>;

  @Input()
  callback!: Function;

  clicked = false;

  onToggle(todo: any) {
    console.log('toggling todo..');
    todo.completed = !todo.completed;
  }
}
