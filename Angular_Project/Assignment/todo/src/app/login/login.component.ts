import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'admin';
  password = '';
  errorMsg = 'Invalid Login';
  invalidLogin = false;

  //adding Router dependancy
  constructor(private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidLogin = false;      
      this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidLogin = true;
    }
    //console.log(this.username);

  }

  handleCustomerLogin(){
    this.username = 'customer';
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidLogin = false;      
      this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidLogin = true;
    }
  }

}
