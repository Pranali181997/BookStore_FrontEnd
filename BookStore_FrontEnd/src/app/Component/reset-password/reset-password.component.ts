import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../Service/UserService/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  token: any;

  resetPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService, private _snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    },
      // {
      //   validator: MustMatch('Password', 'ConfirmPassword')
      // }
    );
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      let reqData = {
        Password: this.resetPasswordForm.value.Password,
        newPassword: this.resetPasswordForm.value.ConfirmPassword
      }
      this.userService.Resetpassword(reqData,this.token).subscribe((response: any) => {
        console.log("Password changed successfully", response);
        this.router.navigateByUrl('/log-in')
        this._snackBar.open('Congratulations! Password changed successfully', '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: ['snackbar-green']
        })
      });
    }
  }
}
// function MustMatch(arg0: string, arg1: string): any {
//   throw new Error('Function not implemented.');
// }
