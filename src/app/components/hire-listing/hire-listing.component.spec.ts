import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireListingComponent } from './hire-listing.component';

describe('HireListingComponent', () => {
  let component: HireListingComponent;
  let fixture: ComponentFixture<HireListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
