import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkListingComponent } from './work-listing.component';

describe('WorkListingComponent', () => {
  let component: WorkListingComponent;
  let fixture: ComponentFixture<WorkListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
