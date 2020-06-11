import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'session/login',
    pathMatch: 'full'
  },
  { path: '', 
    loadChildren: ()=> import('./modules/session/session.module').then(m=>m.SessionModule) 
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }