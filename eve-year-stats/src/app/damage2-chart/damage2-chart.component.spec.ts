import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Damage2ChartComponent } from './damage2-chart.component';

describe('Damage2ChartComponent', () => {
  let component: Damage2ChartComponent;
  let fixture: ComponentFixture<Damage2ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Damage2ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Damage2ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
