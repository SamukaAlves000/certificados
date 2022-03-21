import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nr18P1Component } from './nr18-p1/nr18-p1.component';
import { Nr18P2Component } from './nr18-p2/nr18-p2.component';
import {AssinaturasModule} from '../assinaturas/assinaturas/assinaturas.module';



@NgModule({
    declarations: [ Nr18P1Component, Nr18P2Component],
  exports: [
    Nr18P1Component,
    Nr18P2Component
  ],
    imports: [
        CommonModule,
        AssinaturasModule
    ]
})
export class Nr18Module { }
