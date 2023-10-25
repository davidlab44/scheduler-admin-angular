import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareaComponent } from './chartarea.component';

describe('ChartareaComponent', () => {
  let component: ChartareaComponent;
  let fixture: ComponentFixture<ChartareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartareaComponent]
    });
    fixture = TestBed.createComponent(ChartareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
