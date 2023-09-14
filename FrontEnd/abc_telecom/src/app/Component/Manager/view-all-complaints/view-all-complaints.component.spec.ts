import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllComplaintsComponent } from './view-all-complaints.component';

describe('ViewAllComplaintsComponent', () => {
  let component: ViewAllComplaintsComponent;
  let fixture: ComponentFixture<ViewAllComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
