import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('flogin', { static: true }) form: NgForm;
  haveAccess = true;
  text = '';
 
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  

  onLogin() {
    const email = this.form.value.email;
    const pass = this.form.value.pass;
    const keepsession = this.form.value.keepsession === true ? this.form.value.keepsession : false;
    if (this.form.valid){
      this.text = '';
      this.loginService.login(email).subscribe(data => {
        const aux: any = data;
        if (aux.resp && aux.password != pass) {
          this.haveAccess = false;
          this.text = 'Incorrect Password';
        } else{
          if(!aux.resp){
            this.haveAccess = false;
            this.text = 'Incorrect Email';
          
          }
        }
        if(this.haveAccess){
          this.loginService.setAdminEnabled(email).subscribe();
          this.router.navigateByUrl('main/dashboard');
        }
        
        });

    }else {
      this.text = 'Incorrect Data';
      this.haveAccess = false;
    }
  }
}
