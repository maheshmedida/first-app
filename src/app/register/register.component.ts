import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 //user details variable
  userDetails: any;

  //route indicator variable
  currRoute:any = "register";

  //error text variables
  nameError = false
  emailError = false
  ageError = false
  cityError = false
  passwordError = false
  confirmPassError = false

  constructor(private router: Router, private toaster: ToastrService) {
this.userDetails = {
  name: '',
  age: '',
  city:'',
  email: '',
  password: '',
  confirmPassword:''
}
  }
  ngOnInit(): void {
    this.toaster.info('Register here')
  }

  userRegistrationDetails(){
  if(this.userDetails.email === '' || this.userDetails.password === ''){
  this.registerFail()
}else{
  this.userRegistrationCheck()
}
  }

  userRegistrationCheck(){
    if(this.userDetails.confirmPassword === this.userDetails.password){
      this.userRegistration()
    }else{
      this.toaster.error('Password and Confirm Password should be same')
    }
  }

  userRegistration(){
    let allUsers:any = []
    let registeredUsers:any = localStorage.getItem('registeredUsers')
     if (JSON.parse(registeredUsers)!==null && JSON.parse(registeredUsers).length>0){
       allUsers = JSON.parse(registeredUsers)
     }
    allUsers = [...allUsers,this.userDetails]
    // allUsers.push(this.userDetails);
    localStorage.setItem('registeredUsers', JSON.stringify(allUsers))
    this.setDetailsEmpty();
    this.router.navigate(['/login'])
  }

  setDetailsEmpty(){
    this.userDetails.name = '',
    this.userDetails.email = '',
    this.userDetails.age = '',
    this.userDetails.city = '',
    this.userDetails.password = '',
    this.userDetails.confirmPassword = ''
  }

  registerSuccess(){
    this.toaster.success('Registration successful')
  }

  registerFail(){
    this.toaster.error('Registration failed. Please fill email and password')
  }

  //input validations
  validateName(){
    if(this.userDetails.name===''){
      this.nameError = true
    }else{this.nameError = false}
  }
  
  validateEmail(){
    if(this.userDetails.email === ''){
      this.emailError = true
    }else{this.emailError = false}
  }

  validateAge(){
    if(this.userDetails.age === ''){
      this.ageError = true
    }else{this.ageError = false}
  }

  validateCity(){
    if(this.userDetails.city===''){
      this.cityError = true
    }else{this.cityError = false}
  }

  validatePassword(){
    if(this.userDetails.password===''){
      this.passwordError = true
    }else{this.passwordError = false}
  }

  validateConfirmPassword(){
    if(this.userDetails.confirmPassword===''){
      this.confirmPassError = true
    }else{this.confirmPassError = false}
  }

}