import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleColumnChartComponent } from './simple-column-chart.component';

describe('SimpleColumnChartComponent', () => {
  let component: SimpleColumnChartComponent;
  let fixture: ComponentFixture<SimpleColumnChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleColumnChartComponent]
    });
    fixture = TestBed.createComponent(SimpleColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
