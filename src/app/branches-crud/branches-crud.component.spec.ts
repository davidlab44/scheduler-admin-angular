import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesCrudComponent } from './branches-crud.component';

describe('BranchesCrudComponent', () => {
  let component: BranchesCrudComponent;
  let fixture: ComponentFixture<BranchesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchesCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
