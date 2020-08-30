import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';  
  welcomeMessageFromService:String;
  constructor(private router:ActivatedRoute,
    private service: WelcomeDataService,
    public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.name = this.router.snapshot.params['name'];   
    this.name= this.name.charAt(0).toUpperCase()+this.name.slice(1);
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handelErrorResponse(error)      
    );    
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldPathVariableService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handelErrorResponse(error)  
    )
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handelErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
    
  }  

}
