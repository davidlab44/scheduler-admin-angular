import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsastatesmapComponent } from './usastatesmap.component';

describe('UsastatesmapComponent', () => {
  let component: UsastatesmapComponent;
  let fixture: ComponentFixture<UsastatesmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsastatesmapComponent]
    });
    fixture = TestBed.createComponent(UsastatesmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
