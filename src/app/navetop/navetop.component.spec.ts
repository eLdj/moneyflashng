import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavetopComponent } from './navetop.component';

describe('NavetopComponent', () => {
  let component: NavetopComponent;
  let fixture: ComponentFixture<NavetopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavetopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavetopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
