import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3SecComponent } from './d3-sec.component';

describe('D3SecComponent', () => {
  let component: D3SecComponent;
  let fixture: ComponentFixture<D3SecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3SecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3SecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
