import { HttpHeaders } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from './htttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
token:any;
base=environment.baseUrl;
  constructor( private httpService:HttpServiceService) { 
   this.token=localStorage.getItem('token')
  }

getAllBook(){
  this.token=localStorage.getItem('token')
  console.log("GetAllBook")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    
    return this.httpService.getService(this.base +'Book/Get_All_Book', true, header)
  }
}

