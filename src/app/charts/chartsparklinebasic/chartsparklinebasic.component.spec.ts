import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsparklinebasicComponent } from './chartsparklinebasic.component';

describe('ChartsparklinebasicComponent', () => {
  let component: ChartsparklinebasicComponent;
  let fixture: ComponentFixture<ChartsparklinebasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsparklinebasicComponent]
    });
    fixture = TestBed.createComponent(ChartsparklinebasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
