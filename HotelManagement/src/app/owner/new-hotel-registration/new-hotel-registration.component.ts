import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-new-hotel-registration',
  templateUrl: './new-hotel-registration.component.html',
  styleUrls: ['./new-hotel-registration.component.css']
})
export class NewHotelRegistrationComponent {
  newHotelRgistration!:FormGroup;
  editId!:number;
  dataById:any;

  constructor(private formBuilder:FormBuilder,
    private router: Router,
    private  commonApiCallService: CommonApiCallService,
    private commonService :CommonService){}

    ngOnInit(){
      this.editId = this.commonService.id;
      this.dataById = this.commonService.dataById;
      this.myOwnerRegistration();
    }

    myOwnerRegistration(){
      this.newHotelRgistration = this.formBuilder.group({
        ownerName : [this.dataById ? this.dataById.ownerName : '',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*$')]],
        ownerContact : [this.dataById ? this.dataById.ownerContact : '',[Validators.required]],
        hotelName : [this.dataById ? this.dataById.hotelName : '',[Validators.required]],
        hotelAddress :[this.dataById ? this.dataById.hotelAddress : '',[Validators.required]],
        hotelContact : [this.dataById ? this.dataById.hotelContact : '',[Validators.required]],
        hotelMenu : [this.dataById ? this.dataById.hotelMenu : '',[Validators.required]],
        roomAvailable : [this.dataById ? this.dataById.roomAvailable : '',[Validators.required]],
        ownerCheck : [this.dataById ? this.dataById.ownerCheck : '',[Validators.required]],
        userPassword: [this.dataById ? this.dataById.userPassword : '',[Validators.required]],

      })
    }
    back(){
      this.router.navigateByUrl('owner/ownerSuccess')
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

    if(this.editId){
      this.commonApiCallService.patchApiCall(endpoint,request,this.editId).subscribe((resp:any) =>{
        console.log(resp);
        
      })
    }
    else{
      this.commonApiCallService.postApiCall(endpoint,request).subscribe((resp:any) =>{
        console.log(resp);
        
      })
    }

     this.router.navigateByUrl('owner/ownerSuccess')
      
    }
    ngOnDestroy(){
      this.commonService.dataById = {};
      this.commonService.id = '';
    }

}
