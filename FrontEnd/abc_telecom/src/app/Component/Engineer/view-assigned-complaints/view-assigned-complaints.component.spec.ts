import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedComplaintsComponent } from './view-assigned-complaints.component';

describe('ViewAssignedComplaintsComponent', () => {
  let component: ViewAssignedComplaintsComponent;
  let fixture: ComponentFixture<ViewAssignedComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssignedComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAssignedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
