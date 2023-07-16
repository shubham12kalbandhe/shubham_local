import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formTitle = '--LOGIN FORM--';
  test!: string;

  //propertyName : data type = value ; D+D of property
  //propertyName! : data type; only declareation

  amount: number = 50000;
  panNo: any = true;
  formTitle = '---LOGIN FORM-';
 test: string ='jbdxbxwndjiendnd jdbijwbdiw2bd';

  //propertyName : data type = value ; D+D of property
  //propertyName! : data type; only declareation

  amount: number = 50000;
  panNo: any = true;

  studentName = "Shreeya";
  studentMarks = 70;
  isStudentActive = true;


  submit() {
    let num = 20;
    num = 2000;
   // this.test = 'testing property';
    this.formTitle = 'Login Form'
  }
  testFun(){
    this.submit()
  }

  interpolationTest(){
    return 'pune';
  }
  formTitleTest(){
    // let title = '..Login Form..'
    // return typeof(title) //legel code o/p:string
    return '..Login Form..'
  }
//data binding techniques in angular : data bind
//1. one way data binding : .ts file's data would get transfer to .hmlt(DOM)
// 1.String interpolation : {{}}
// 2.property binding : []
// 3.Event binding:()

// 2.Two way data bindind[(NgModel)] :[()]

}


}
