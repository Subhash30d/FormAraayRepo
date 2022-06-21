import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  constructor(private httpclient: HttpClient) { }

  

  postUserdetails(body: any){
    let url=environment.apiDomain + 'api/users'
    return this.httpclient.post(url , body)
  }
  getuserdata(){
    let url= environment.apiDomainget + 'api/User/validateUserName'
    return this.httpclient.get(url)
  }
}
