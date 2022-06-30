import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../htttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  base=environment.baseUrl;
  token:any;
   constructor(private httpService:HttpServiceService) { 
     this.token=localStorage.getItem('token')
   }
   registration(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(this.base+`User/Register`,data,false,header);
   }
   logIn(data:any){
    let header={
      header:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }   
    return this.httpService.postService(this.base+`User/Login?Email=${data.Email}&Password=${data.Password}`, {} ,false,header)
   }
   forgetPassword(data:any){
    let header={
      header:new HttpHeaders({
        'Content-Type':'application/json-patch+json'
      })
    }
    return this.httpService.postService(this.base+`User/ForgetPassword`,data,false,header)
   }
   Resetpassword(data:any,token:any){
    let header={
      headers:new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':`Bearer ${this.token}`
      })
    }
      return this.httpService.putService(this.base+`User/Reset Password?Password=${data.Password}&newPassword=${data.newPassword}`,{},true,header)
 }
}

