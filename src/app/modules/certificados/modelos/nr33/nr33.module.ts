import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nr33P2Component } from './nr33-p2/nr33-p2.component';
import { Nr33P1Component } from './nr33-p1/nr33-p1.component';
import {AssinaturasModule} from '../assinaturas/assinaturas/assinaturas.module';



@NgModule({
    declarations: [Nr33P2Component, Nr33P1Component],
  exports: [
    Nr33P1Component,
    Nr33P2Component
  ],
    imports: [
        CommonModule,
        AssinaturasModule
    ]
})
export class Nr33Module { }
