import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldmapchartComponent } from './worldmapchart.component';

describe('WorldmapchartComponent', () => {
  let component: WorldmapchartComponent;
  let fixture: ComponentFixture<WorldmapchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldmapchartComponent]
    });
    fixture = TestBed.createComponent(WorldmapchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
