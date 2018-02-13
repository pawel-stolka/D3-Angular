import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3FirstComponent } from './d3-first.component';

describe('D3FirstComponent', () => {
  let component: D3FirstComponent;
  let fixture: ComponentFixture<D3FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3FirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
