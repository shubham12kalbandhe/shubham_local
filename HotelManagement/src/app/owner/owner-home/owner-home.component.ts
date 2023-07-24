import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent {
  loginForm! : FormGroup;

  constructor(private router : Router,
    private fb: FormBuilder){

    }
    ngOnInit(){
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
    
  }
  back(){
    this.router.navigateByUrl('home')
  }

}
