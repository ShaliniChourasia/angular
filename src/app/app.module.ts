import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Module1Module } from './module1/module1.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
