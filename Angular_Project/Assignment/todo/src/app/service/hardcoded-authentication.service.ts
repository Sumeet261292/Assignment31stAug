import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    if(username === 'admin' && password ==='admin'){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    if(username === 'customer' && password ===''){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
      return false;    
  }

  isAdminLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    
    return (user==='admin')? true:false;    
  }

  isCustomerLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    
    return (user==='customer')? true:false;    
  }

  loggedOut() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
