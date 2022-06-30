import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserServiceService } from '../Service/UserService/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted = false;
  hide1=true;

  constructor(private formBuilder:FormBuilder,private user:UserServiceService,private snackBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log("inside submit")
    if (this.LoginForm.valid) {
      console.log("valid data", this.LoginForm.value);
      let data = {
        Email: this.LoginForm.value.Email,

        Password: this.LoginForm.value.Password,
      }
      this.user.logIn(data).subscribe((res: any) => {
        console.log("the result is",res);
        localStorage.setItem(`token`, res.data.token)
        // localStorage.setItem(`email`, res.data.email)
        this.router.navigateByUrl('/dashBoard')
        this.snackBar.open('login successfull', '', {
          duration: 20,
        });
      }, error => {
        this.snackBar.open('please enter valid data', '', {
          duration: 20,
        })
      });
    }
    else {
      console.log("Invalid data", this.LoginForm.value);
    }
  }
  // handleClear(){
  //   this.LoginForm.value.Email = ' ';
  //   this.LoginForm.value.Password = ' ';
  // }
}
