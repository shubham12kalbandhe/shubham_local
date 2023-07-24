import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';

import { SharedModule } from '../common/shared/shared.module';
import { NewHotelRegistrationComponent } from './new-hotel-registration/new-hotel-registration.component';


@NgModule({
  declarations: [
    OwnerHomeComponent,
    OwnerSignUpComponent,
    NewHotelRegistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
