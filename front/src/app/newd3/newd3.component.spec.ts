import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newd3Component } from './newd3.component';

describe('Newd3Component', () => {
  let component: Newd3Component;
  let fixture: ComponentFixture<Newd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
