import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import {AssinaturasModule} from '../assinaturas/assinaturas/assinaturas.module';



@NgModule({
  declarations: [Pagina1Component, Pagina2Component],
  exports: [
    Pagina1Component,
    Pagina2Component
  ],
    imports: [
        CommonModule,
        AssinaturasModule
    ]
})
export class Modelo1Module { }
