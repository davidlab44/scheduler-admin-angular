import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartcolumnComponent } from './chartcolumn.component';

describe('ChartcolumnComponent', () => {
  let component: ChartcolumnComponent;
  let fixture: ComponentFixture<ChartcolumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartcolumnComponent]
    });
    fixture = TestBed.createComponent(ChartcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
