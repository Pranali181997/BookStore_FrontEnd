import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../Service/UserService/user-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  ForgetPasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.ForgetPasswordForm = this.formBuilder.group({
      Email:['',Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log("inside submit")
    if (this.ForgetPasswordForm.valid) {
      console.log("valid data", this.ForgetPasswordForm.value);
      let data = {

        Email: this.ForgetPasswordForm.value.Email,
      }
      this.user.forgetPassword(data).subscribe((res:any)=>{
        console.log("RESULT IS",res);
      })
      }
      else{
      console.log("Invalid data", this.ForgetPasswordForm.value);
    }
  }
}

