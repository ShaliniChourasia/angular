import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1componnt1Component } from './module1componnt1/module1componnt1.component';

@NgModule({
  declarations: [Module1componnt1Component],
  imports: [
    CommonModule
  ],
  exports:[Module1componnt1Component]
})
export class Module1Module { }
