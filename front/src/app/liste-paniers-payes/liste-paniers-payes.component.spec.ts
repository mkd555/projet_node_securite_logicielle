import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePaniersPayesComponent } from './liste-paniers-payes.component';

describe('ListePaniersPayesComponent', () => {
  let component: ListePaniersPayesComponent;
  let fixture: ComponentFixture<ListePaniersPayesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePaniersPayesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePaniersPayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
