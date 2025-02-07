import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployeComponent } from './dashboard-employe.component';

describe('DashboardEmployeComponent', () => {
  let component: DashboardEmployeComponent;
  let fixture: ComponentFixture<DashboardEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
