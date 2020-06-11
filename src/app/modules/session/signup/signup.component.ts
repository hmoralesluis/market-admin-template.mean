import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  @ViewChild('f', { static: true }) form: NgForm;
  findError = false;
  text = '';
  activedApp = false;
  appdata: any;
  externalappurl = '';

  constructor(private router: Router,
    private singupService: SignupService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  onRegister(){
    if (!this.form.valid) {
      this.text = 'Incorrect Data';
      this.findError = true;
    } else {
      this.findError = false;
      const name = this.form.value.name;
      const email = this.form.value.email;
      const password = this.form.value.password;
      this.singupService.checkEmail(email).subscribe(data => {
        const aux: any = data;
        if (aux.resp) {
          this.text = 'Email in stock';
          this.findError = true;
        } else {
          
          this.singupService.createAdmin(name, email, password).subscribe();
          this.router.navigateByUrl('/session/login');
      //     .subscribe(data1 => {
      //       const aux1: any = data1;
      //       if (aux1.resp) {
      //         if (this.activedApp) {
      //           window.location.href =  `${this.appdata.urllogin}/${this.authenticationService.getToken()}`;
      //         } else {
      //           this.router.navigateByUrl('/main/profile');
      //         }
      //       }
      //     });
        } 
      });
    }

  }

}

