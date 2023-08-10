import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../common/common-api-call.service';
import { CommonService } from '../common/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../owner/dialog/dialog.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.css']
})
export class OwnerSuccessComponent {
  hotelDetails: any;
  userName!: string;
  userHotelDetails:any[]=[]
  showTable: any;
  dataById: any;

  constructor(private router : Router,
    private  commonApiCallService: CommonApiCallService,
    private commonService :CommonService, public dialog: MatDialog ){}

    ngOnInit(){
      console.log('oninit calling....');
      this.userName = this.commonService.userName;
      
    }

    newHotelRegistration(){
    this.router.navigateByUrl('owner/newHotelRegistration')
  }

 async myHotelDetails(){
    this.showTable = !this.showTable;
    let endPoint = 'hotelDetails';
   // this.commonApiCallService.getApiCall(endPoint).subscribe(data=>{
    //  this.hotelDetails = data;
   // })
     this.hotelDetails  = await this.commonApiCallService.getApiCall(endPoint).toPromise()
    console.log('hotelDetails',this.hotelDetails);
    if(this.hotelDetails){
      this.hotelDetailsByOwner();
      if(this.userHotelDetails.length > 0){

      }
      else{
        this.commonService.warningToaster('no any hotel available','warning',{
          timeOut:10000,
          positionClass:'toast-top-center'
        })
      }
    }
    else{
      alert('no owner data available')
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
  delete(id:number){
  const dialogRef =this.dialog.open(DialogComponent, {
    width: '250px',
    height: '250px'
  })

  dialogRef.afterClosed().subscribe((yesValue:any)=>{
    if(yesValue === 'YES'){
      this.deleteRecord(id);
      this.showTable = !this.showTable;
      this.myHotelDetails();
    }
  })

}

async deleteRecord(id:number){
  await this.commonApiCallService.deleteApiCall('hotelDetails',id).toPromise();
   
}

  
  

 async edit(id:number){
  this.commonService.id = id;
  this.dataById = await this.commonApiCallService.getApiCall('hotelDetails',id ).toPromise();
  this.commonService.dataById = this.dataById;
  this.router.navigateByUrl('owner/newHotelRegistration')
  }

}
