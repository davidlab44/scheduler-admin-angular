import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigQueryComponent } from './big-query.component';

describe('BigQueryComponent', () => {
  let component: BigQueryComponent;
  let fixture: ComponentFixture<BigQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigQueryComponent]
    });
    fixture = TestBed.createComponent(BigQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
