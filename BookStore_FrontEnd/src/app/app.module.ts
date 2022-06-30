import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'; 
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { GetAllBooksComponentComponent } from './Component/get-all-books-component/get-all-books-component.component';
// import { AddBookComponent } from './Component/add-book/add-book.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashBoardComponent,
    GetAllBooksComponentComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
   MatCheckboxModule,
   MatButtonModule,
   HttpClientModule,
   MatInputModule,
   MatSnackBarModule,
   MatToolbarModule,
   MatMenuModule,
   MatSelectModule,
   MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
