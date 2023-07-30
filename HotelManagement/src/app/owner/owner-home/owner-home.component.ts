import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent {
  loginForm! : FormGroup;
  endPoint!: string;
  ownerData: any;
  validUser : boolean = false;

  constructor(private router : Router,
    private fb: FormBuilder,
    private commonApiCallService :CommonApiCallService,
    private commonService : CommonService ){

    }
    ngOnInit(){
      this.endPoint = this.commonService.journey;
      console.log('endPoint...',this.endPoint);
      
      this.loginFormDetails();
    }

    loginFormDetails(){
      this.loginForm = this.fb.group({
        userName :[],
        password :[]
      })
    }

  login(){
    console.log(this.loginForm.value);
     if(this.loginForm.value.userName){
      this.commonService.userName = this.loginForm.value.userName;
     }

    this.getOwnerApiData();
    if(this.ownerData){
      this.isValidUser();
      if(this.validUser){
        this.router.navigateByUrl('owner/ownerSuccess');
      }
      else{
        this.router.navigateByUrl('owner/ownerHome');
      }

    }
    
  }
  back(){
    this.router.navigateByUrl('home')
  }

  getOwnerApiData(){
     this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse =>{
      this.ownerData = getOwnerResponse;
     })
     console.log('this.ownerData',this.ownerData);
  }

  isValidUser(){
    this.ownerData.forEach((element:any)=>{
     if(element.UserName === this.loginForm.value.userName && element.Password ===this.loginForm.value.password){
        this.validUser = true;
      }
    });
    return
  }

}
