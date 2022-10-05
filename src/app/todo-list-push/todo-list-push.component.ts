import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-push',
  templateUrl: './todo-list-push.component.html',
  styleUrls: ['./todo-list-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListPushComponent implements OnInit {
  constructor() {}

  @Input() todos$!: Observable<Todo[]>;
  @Output()
  toggle = new EventEmitter<Object>();

  ngOnInit(): void {}

  onToggle(todo: Todo) {
    this.toggle.emit(todo);
    todo.completed = !todo.completed;
  }
}
