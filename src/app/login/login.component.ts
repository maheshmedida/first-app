import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AppDataService} from '../app-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //headers:any = { 'Content-Type':'application/x-www-form-urlencoded'};
// data:any = {
//   body: this.body,
//   headers: this.headers
// }

  //user details
loginDetails: any;

//current route variable
currRoute:any = "login";

//input error variables
emailEmptyError:any = false;
passwordEmptyError: any = false;

  constructor(private router: Router, private toaster: ToastrService, private loginService:AppDataService) {
this.loginDetails = {
  email: '',
  password: ''
} 
   }

  ngOnInit() {
      this.toaster.info('Log in here')
  }

  emailValidator(){
    if(this.loginDetails.email === ''){
      this.emailEmptyError = true;
    }else{
      this.emailEmptyError=false;
    }
  }

  passwordValidator(){
    if(this.loginDetails.password === ''){
      this.passwordEmptyError = true;
    }else{
      this.passwordEmptyError = false;
    }
  }

  userLogin(){
    debugger
    const params1:any = `username=${this.loginDetails.email}&password=${this.loginDetails.password}&
    grant_type=password&
    checkB2B=true&
    clientId=gaian&
    productId=618bea6b8083b80001ca83d8&
    provider=other
    `
    this.loginService.onLogin(params1)
         .subscribe((result:any) =>{
           debugger
          this.router.navigate(['/home'])
         }
         ) 
        }   
     

    // //const registeredUsers:any = localStorage.getItem('registeredUsers')
    // // if (registeredUsers !== null){
    // // let allUsers = JSON.parse(registeredUsers)
    // let userFound = false
    // //for(var i = 0; i < allUsers.length; i++) {
    //   var data= allUsers[i];
    //   if(data.email === this.loginDetails.email && data.password === this.loginDetails.password && userFound === false){
    //     this.loginSuccess()
    //     userFound = true
    //     this.loginDetails.email = ''
    //     this.loginDetails.password = ''
    //     this.loginService.onLogin(this.data)
    //     .subscribe((result:any) => this.successMsg = "SUCCESS",
    //     (error:HttpErrorResponse) => this.errorMsg="ERROR")
    //     // this.router.navigate(['/home'])
    //   }
    //   else{
    //     if(!userFound){
    //     this.loginFailure()
    //     }
    //   }
    //}
  // }else{
  //   this.loginEmpty()
  // }
  

  loginSuccess(){
    this.toaster.success('Logged in successfully');
  }

  loginFailure(){
    this.toaster.error('Login failed. Invalid details')
  }

  loginEmpty(){
    this.toaster.error('Please sign up')
  }
}

