import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { GetAllBooksComponentComponent } from './Component/get-all-books-component/get-all-books-component.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { QuickViewComponent } from './Component/quick-view/quick-view.component';
import { RegisterComponent } from './Component/register/register.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';

const routes: Routes = [
  {path:`register`,component:RegisterComponent},
  {path:'',redirectTo:`/log-in`,pathMatch:'full'},
  {path:`log-in`,component:LogInComponent},
  {path:`forget-password`,component:ForgetPasswordComponent},
  {path:`Reset-Password/:token`,component:ResetPasswordComponent},
  {path: `dashBoard`,component:DashBoardComponent,
  children:[
    { path:'', redirectTo:"/dashBoard/get-all-books", pathMatch:'full'},
    { path:`get-all-books`,component:GetAllBooksComponentComponent},
    {path:`quick-view`,component:QuickViewComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
