import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDemoComponent } from './todo-demo.component';

describe('TodoDemoComponent', () => {
  let component: TodoDemoComponent;
  let fixture: ComponentFixture<TodoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
