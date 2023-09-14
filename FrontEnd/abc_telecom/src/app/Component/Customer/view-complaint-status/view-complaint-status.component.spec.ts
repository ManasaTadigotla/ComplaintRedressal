import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplaintStatusComponent } from './view-complaint-status.component';

describe('ViewComplaintStatusComponent', () => {
  let component: ViewComplaintStatusComponent;
  let fixture: ComponentFixture<ViewComplaintStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComplaintStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComplaintStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
