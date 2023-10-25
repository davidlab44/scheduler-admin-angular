import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartlineComponent } from './chartline.component';

describe('ChartlineComponent', () => {
  let component: ChartlineComponent;
  let fixture: ComponentFixture<ChartlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartlineComponent]
    });
    fixture = TestBed.createComponent(ChartlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
