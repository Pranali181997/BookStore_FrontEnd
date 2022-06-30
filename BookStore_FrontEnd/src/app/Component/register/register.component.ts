import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/UserService/user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private user:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      FullName:['',Validators.required],
      Email:['',Validators.required],
      Password:['',Validators.required],
      mobileNumber:['', [Validators.required,Validators.minLength(6)]],
    });
  }
  onSubmit(){
    if(this.registerForm.valid){
      console.log("valid data",this.registerForm.value);
      let data={
        fullName:this.registerForm.value.FullName,
        email:this.registerForm.value.Email,
        password:this.registerForm.value.Password,
        mobileNumber:this.registerForm.value.mobileNumber,
      }
      this.user.registration(data).subscribe((result:any)=>{
        console.log("Register successfully",result);
        this.router.navigateByUrl('/log-in')
      })
    }
    else{
      console.log("Invalid data",this.registerForm.value);
    }
  }
}
