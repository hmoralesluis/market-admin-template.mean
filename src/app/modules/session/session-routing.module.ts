import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'session/login',
    pathMatch: 'full'
  },
  {
    path: 'session/login',
    component: LoginComponent
  },
  
  {
    path: 'session/signup',
    component: SignupComponent
  },

  { path: 'main/dashboard', 
    loadChildren: ()=> import('../main/main.module').then(m=>m.MainModule) 
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }