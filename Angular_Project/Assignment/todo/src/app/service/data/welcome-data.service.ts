import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

export class HelloWorldBean {
 constructor(public message: String){}
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello world bean service");
  }

  executeHelloWorldPathVariableService(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    //console.log("Execute Hello world bean service");
  }
}
