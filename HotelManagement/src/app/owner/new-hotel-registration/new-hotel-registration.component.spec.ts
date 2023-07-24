import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotelRegistrationComponent } from './new-hotel-registration.component';

describe('NewHotelRegistrationComponent', () => {
  let component: NewHotelRegistrationComponent;
  let fixture: ComponentFixture<NewHotelRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHotelRegistrationComponent]
    });
    fixture = TestBed.createComponent(NewHotelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
