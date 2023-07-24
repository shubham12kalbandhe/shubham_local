import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { OwnerSuccessComponent } from '../owner-success/owner-success.component';
import { NewHotelRegistrationComponent } from './new-hotel-registration/new-hotel-registration.component';


const routes: Routes = [
  {path:'', component: OwnerHomeComponent},
  {path:'ownerHome',component: OwnerHomeComponent},
  {path: 'ownerSignUp', component: OwnerSignUpComponent},
  {path:'ownerSuccess',component: OwnerSuccessComponent},
  {path: 'newHotelRegistration',component: NewHotelRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
