import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  userdata:any = { };

  constructor(private router:Router,private loginService:LoginServiceService) { }

  ngOnInit(): void {
  	this.getUserData();
  }
  getUserData() {
  		this.userdata = this.loginService.userData;
  	};
  goBackToLogin() {
  	this.router.navigateByUrl('/registration');
  }

}
