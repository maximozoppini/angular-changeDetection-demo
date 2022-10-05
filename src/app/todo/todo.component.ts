import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  todo!: Todo;

  @Output()
  toggle = new EventEmitter<Object>();

  onToggle() {
    this.toggle.emit(this.todo);
  }
}
