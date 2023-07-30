import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-sign-up',
  templateUrl: './owner-sign-up.component.html',
  styleUrls: ['./owner-sign-up.component.css']
})
export class OwnerSignUpComponent {
  signUpForm! : FormGroup;
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
      this.signUpForm = this.fb.group({
        name :['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*$'),this.whiteSpaceValidator]],
        email :['',[]],
        mobileNo :['',[]],
        password :['',[]],
        gender :['',[]],
        
      })
    }
    submit(){
     let request = {
      UserName : this.signUpForm.value.name?.trim(),
      Email : this.signUpForm.value.email,
      Mobile : this.signUpForm.value.id,
     Password : this.signUpForm.value.password,
      Gender : this.signUpForm.value.gender
      
     }
     this.apiCallService.postApiCall(this.journey,request).subscribe(resp =>{
      console.log(resp);
      this.postResponse = resp;
     })

    // if(this.postResponse.id){}
     this.router.navigateByUrl('owner/ownerSuccess');
    }
    back(){
      this.router.navigateByUrl('owner/ownerHome')
    } 
    whiteSpaceValidator(nameFieldValue:any){
      let data = nameFieldValue.value;
      let newdata = data?.trim();
      let isValid = data.length != newdata.length;
      return isValid ? {whiteSpace:true} : null
    }
  }


