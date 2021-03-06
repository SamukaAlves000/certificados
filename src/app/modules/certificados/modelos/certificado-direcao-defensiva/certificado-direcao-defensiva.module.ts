import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadoDirecaoDefensivaP1Component } from './certificado-direcao-defensiva-p1/certificado-direcao-defensiva-p1.component';
import { CertificadoDirecaoDefensivaP2Component } from './certificado-direcao-defensiva-p2/certificado-direcao-defensiva-p2.component';
import {AssinaturasModule} from '../assinaturas/assinaturas/assinaturas.module';



@NgModule({
  declarations: [CertificadoDirecaoDefensivaP1Component, CertificadoDirecaoDefensivaP2Component],
  exports: [
    CertificadoDirecaoDefensivaP1Component,
    CertificadoDirecaoDefensivaP2Component
  ],
  imports: [
    CommonModule,
    AssinaturasModule
  ]
})
export class CertificadoDirecaoDefensivaModule { }
