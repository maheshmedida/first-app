import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
headerOptions:any
iamHeaderOption:any
  constructor(private http: HttpClient) {
    this.headerOptions = new HttpHeaders();
    this.headerOptions = this.headerOptions.set( 'Content-Type','application/x-www-form-urlencoded')
   }
   onLogin(data:any){
     debugger
   const url = "http://ingress-gateway.gaiansolutions.com/iam-service/oauth/token"
     let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
       });
  let options = { headers: headers };
     return this.http.post(url,data,options)
   }

   getAllProducts(){
     debugger
     const url = 'http://ingress-gateway.gaiansolutions.com/engagements-web/v1.0/6052f5347b20fd0006394a2d/engagements/list?paged=true&page=0&size=40&ownedOnly=true'
     return this.http.get(url)
   }

   getAllProducts2(formData:any){
    const url = 'http://ingress-gateway.gaiansolutions.com/engagements-web/v1.0/6052f5347b20fd0006394a2d/engagements/list?paged=true&page=0&size=40&ownedOnly=true'
return this.http.post(url,formData)
   }
}
