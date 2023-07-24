import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-sign-up',
  templateUrl: './owner-sign-up.component.html',
  styleUrls: ['./owner-sign-up.component.css']
})
export class OwnerSignUpComponent {
  loginForm! : FormGroup;
  journey! : string;
  postResponse : any;

  constructor(private fb: FormBuilder ,
    private commonService :CommonService ,
    private apiCallService : CommonApiCallService,
    private router : Router ){}

  ngOnInit(){
    this.journey = this. commonService.journey;
    console.log( ' this.journey',this.journey);
    
    this.FormDetails();

    }
    FormDetails(){
      this.loginForm = this.fb.group({
        name :['',[]],
        email :['',[]],
        mobileNo :['',[]],
        password :['',[]],
        gender :['',[]],
        
      })
    }
    submit(){
     let request = {
      UserName : this.loginForm.value.name,
      Email : this.loginForm.value.email,
      Mobile : this.loginForm.value.id,
     Password : this.loginForm.value.password,
      Gender : this.loginForm.value.gender
      
     }
     this.apiCallService.postApiCall(this.journey,request).subscribe(resp =>{
      console.log(resp);
      this.postResponse = resp;
     })

    // if(this.postResponse.id){}
     this.router.navigateByUrl('owner/ownerLogin')
    }
    back(){
      this.router.navigateByUrl('owner/ownerHome')
    }
  }


