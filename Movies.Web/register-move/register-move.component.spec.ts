import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMoveComponent } from './register-move.component';

describe('RegisterMoveComponent', () => {
  let component: RegisterMoveComponent;
  let fixture: ComponentFixture<RegisterMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
