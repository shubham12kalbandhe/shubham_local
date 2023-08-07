import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';

@Component({
  selector: 'app-new-hotel-registration',
  templateUrl: './new-hotel-registration.component.html',
  styleUrls: ['./new-hotel-registration.component.css']
})
export class NewHotelRegistrationComponent {
  newHotelRgistration!:FormGroup;


  constructor(private formBuilder:FormBuilder,
    private router: Router,
    private  commonApiCallService: CommonApiCallService){}

    ngOnInit(){
      this.myOwnerRegistration();
    }

    myOwnerRegistration(){
      this.newHotelRgistration = this.formBuilder.group({
        ownerName : ['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*$')]],
        ownerContact : ['',[Validators.required]],
        hotelName : ['',[Validators.required]],
        hotelAddress : ['',[Validators.required]],
        hotelContact : ['',[Validators.required]],
        hotelMenu : ['',[Validators.required]],
        roomAvailable : ['',[Validators.required]],
        ownerCheck : ['',[Validators.required]],
        userPassword: ['',[Validators.required]],

      })
    }
    back(){
      this.router.navigateByUrl('owner/ownerHome')
    }
    submit(){
      let endpoint = 'hotelDetails';
      console.log('form data',this.newHotelRgistration.value);

     let request ={
        ownerName: this.newHotelRgistration.value.ownerName,
        ownerContact : this.newHotelRgistration.value.ownerContact ,
        hotelName : this.newHotelRgistration.value. hotelName ,
        hotelAddress: this.newHotelRgistration.value.hotelAddress,
        hotelContact: this.newHotelRgistration.value.hotelContact,
        hotelMenu: this.newHotelRgistration.value. hotelMenu,
        roomAvailable: this.newHotelRgistration.value. roomAvailable,
        ownerCheck: this.newHotelRgistration.value.ownerCheck,
        userPassword: this.newHotelRgistration.value.usePassword,
    }
     this.commonApiCallService.postApiCall(endpoint,request).subscribe((resp:any)=>{
       console.log(resp);
        
  })
     this.router.navigateByUrl('owner/ownerSuccess')
      
    }

}
