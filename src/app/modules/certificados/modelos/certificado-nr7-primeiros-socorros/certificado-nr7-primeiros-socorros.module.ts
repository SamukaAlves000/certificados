import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadoNR7PrimeirosSocorrosP1Component } from './certificado-nr7-primeiros-socorros-p1/certificado-nr7-primeiros-socorros-p1.component';
import { CertificadoNR7PrimeirosSocorrosP2Component } from './certificado-nr7-primeiros-socorros-p2/certificado-nr7-primeiros-socorros-p2.component';
import {AssinaturasModule} from '../assinaturas/assinaturas/assinaturas.module';



@NgModule({
    declarations: [CertificadoNR7PrimeirosSocorrosP1Component, CertificadoNR7PrimeirosSocorrosP2Component],
  exports: [
    CertificadoNR7PrimeirosSocorrosP1Component,
    CertificadoNR7PrimeirosSocorrosP2Component
  ],
    imports: [
        CommonModule,
        AssinaturasModule
    ]
})
export class CertificadoNR7PrimeirosSocorrosModule { }
