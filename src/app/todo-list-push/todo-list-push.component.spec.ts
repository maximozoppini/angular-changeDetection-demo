import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPushComponent } from './todo-list-push.component';

describe('TodoListPushComponent', () => {
  let component: TodoListPushComponent;
  let fixture: ComponentFixture<TodoListPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListPushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
