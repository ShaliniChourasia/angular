import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Child1Component} from './child1/child1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Module1componnt1Component } from './module1/module1componnt1/module1componnt1.component';
import {dashboard,dnsRecordsViewAll,dnsApproveRecordsParam,module1Component1} from '../shared/Common';


const routes: Routes = [
  { path: dashboard, component: DashboardComponent },
  { path: module1Component1, component: Module1componnt1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
