import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSignUpComponent } from './owner-sign-up.component';

describe('OwnerSignUpComponent', () => {
  let component: OwnerSignUpComponent;
  let fixture: ComponentFixture<OwnerSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSignUpComponent]
    });
    fixture = TestBed.createComponent(OwnerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
