import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../common/common-api-call.service';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.css']
})
export class OwnerSuccessComponent {
  hotelDetails: any;
  userName!: string;
  userHotelDetails:any[]=[]

  constructor(private router : Router,
    private  commonApiCallService: CommonApiCallService,
    private commonService :CommonService ){}

    ngOnInit(){
      console.log('oninit calling....');
      this.userName = this.commonService.userName;
      
    }

    newHotelRegistration(){
    this.router.navigateByUrl('owner/newHotelRegistration')
  }

  myhotelDetails(){
    let endPoint = 'hotelDetails';
    this.commonApiCallService.getApiCall(endPoint).subscribe(data=>{
      this.hotelDetails = data;
    })
    console.log('hotelDetails',this.hotelDetails);
    if(this.hotelDetails){
      this.hotelDetailsByOwner();
    }
    
  }
  hotelDetailsByOwner(){
    this.hotelDetails.forEach((element:any)=>{
      if(element.ownerName === this.userName){
        this.userHotelDetails.push(element);
      }
    })
    console.log('this.userHotelDetails',this.userHotelDetails);
    
  }

}
