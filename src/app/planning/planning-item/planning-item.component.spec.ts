import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningItemComponent } from './planning-item.component';

describe('PlanningItemComponent', () => {
  let component: PlanningItemComponent;
  let fixture: ComponentFixture<PlanningItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
