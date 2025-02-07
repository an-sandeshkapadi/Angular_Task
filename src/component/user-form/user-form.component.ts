
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',

})
export class UserFormComponent {

  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(5)]),
   
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    isAgree: new FormControl(false),
  });
   isequalpassword =false;

  userInfo(){
    const userValue = this.profileForm.value;
    
    // console.log(userValue);
    
    // console.log(userValue.password);
    // console.log(userValue.confirmPassword);
    // if(userValue.password ===userValue.confirmPassword){
    //   this.isequalpassword = true;
    //   console.log("Passwords match");
    // }else{
    //   console.log("Passwords not match");
    // }
  }

}
