import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { api } from '.././../../config';


const apiUrl = api.SERVER_URL;

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  createAdmin(name, email, password){
      return this.http.post(`${apiUrl}/createadmin`, {name,email, password});
  }
 
  checkEmail(email){
    return this.http.post(`${apiUrl}/checkemail/${email}`,email);
  }
}
