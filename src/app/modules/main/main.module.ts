import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [DashboardComponent, ArticlesComponent, ProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class MainModule { }