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
  forgotPasswordForm! : FormGroup;
  showForgotPasswordForm : boolean = false;
  forgetPassword :boolean = false;
  userName! :string;

  constructor(private router : Router,
    private fb: FormBuilder,
    private commonApiCallService :CommonApiCallService,
    private commonService : CommonService ){

    }
    ngOnInit(){
      this.endPoint = this.commonService.journey;
      this.forgetPassword = this.commonService.forgetPassword;
      this.userName = this.commonService.userName;
      console.log('endPoint...',this.endPoint);
      
      this.loginFormDetails();
      this.getOwnerApiData();
    }


    loginFormDetails(){
      this.loginForm = this.fb.group({
        userName :[],
        password :[]
      })
    }
    forgoPasswordDetails(){
      this.forgotPasswordForm = this.fb.group({
        newPassword :[],
        confirmPassword :[]
      })
    }

  login(){
    console.log(this.loginForm.value);
     if(this.loginForm.value.userName){
      this.commonService.userName = this.loginForm.value.userName;
     }

    
    if(this.ownerData){
      this.ownerData.find((ownerData :any)=> {
        if(ownerData.UserName === this.loginForm.value.userName && ownerData.Password ===this.loginForm.value.password){
             this.validUser = true
        }
      });

      if(this.validUser){
        this.router.navigateByUrl('owner/ownerSuccess');
      }
      else{
       // alert('username or password is incorrect');
       this.commonService.warningToaster('password is incorrect','warning',
       {
        timeOut:10000,
        positionClass:'toast-top-center'

       })

        this.commonService.forgetPassword = true;
        this.router.navigateByUrl('owner/ownerHome');
      }

    }
    
  }
  back(){
    this.router.navigateByUrl('home')
  }

   async getOwnerApiData(){
    // this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse =>{
    //  this.ownerData = getOwnerResponse;
   // })
      this.ownerData = await this.commonApiCallService.getApiCall(this.endPoint).toPromise()
     console.log('this.ownerData',this.ownerData);
  }

 // isValidUser(){
  //  this.ownerData.forEach((element:any)=>{
   //  if(element.UserName === this.loginForm.value.userName && element.Password ===this.loginForm.value.password){
    //    this.validUser = true;
   //   }
  //  });
  //return
 // }

  forgotPassword(){
    this.showForgotPasswordForm = !this.showForgotPasswordForm;
    this.forgoPasswordDetails();
  }

  submit(){
   this.updatePassword();
    this.showForgotPasswordForm = !this.showForgotPasswordForm;
    this.commonService.forgetPassword = false;
  }

  async updatePassword(){
    var user:any;
    this.ownerData.forEach((data:any)=>{
      if(data.UserName === this.userName){
        user = data;
      }
    
    })
    if(user){
      let request = {
        Password : this.forgotPasswordForm.value.newPassword
      }
   //   this.commonApiCallService.patchApiCall(this.endPoint,request,user.id).subscribe((respo:any)=>{
    //    console.log(respo);
        
  //    })
      await this.commonApiCallService.patchApiCall(this.endPoint,request,user.id).toPromise()
    }
    else{
      alert('user is not exist')
    }
  }

}
