import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1componnt1Component } from './module1componnt1.component';

describe('Module1componnt1Component', () => {
  let component: Module1componnt1Component;
  let fixture: ComponentFixture<Module1componnt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1componnt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1componnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
