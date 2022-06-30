import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
fullName:any='';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.fullName=localStorage.getItem(this.fullName)
  }
  logOut(){   
    localStorage.removeItem('fullName');
    localStorage.removeItem('token');
  }
  logIn(){
    this.router.navigateByUrl('/register')
  }
}
