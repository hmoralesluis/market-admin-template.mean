import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from '.././../../config';

const apiUrl = api.SERVER_URL;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string){
    return this.http.get(`${apiUrl}/getpassword/${email}`);

  }
  
  getadmin(){
    return this.http.get(`${apiUrl}/getadmin`);
  }

  setAdminEnabled(email){
    return this.http.put(`${apiUrl}/setenabled/${email}`,email);

  }

}
