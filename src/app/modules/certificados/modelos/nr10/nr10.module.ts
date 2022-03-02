import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nr10P2Component } from './nr10-p2/nr10-p2.component';
import {Nr10P1Component} from './nr10-p1/nr10-p1.component';



@NgModule({
  declarations: [Nr10P2Component, Nr10P1Component],
  exports: [
    Nr10P1Component,
    Nr10P2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Nr10Module { }
