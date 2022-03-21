import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadoNR5CIPAP1Component } from './certificado-nr5-cipa-p1/certificado-nr5-cipa-p1.component';
import { CertificadoNR5CIPAP2Component } from './certificado-nr5-cipa-p2/certificado-nr5-cipa-p2.component';
import {AssinaturasModule} from '../assinaturas/assinaturas/assinaturas.module';



@NgModule({
    declarations: [CertificadoNR5CIPAP1Component, CertificadoNR5CIPAP2Component],
  exports: [
    CertificadoNR5CIPAP1Component,
    CertificadoNR5CIPAP2Component
  ],
    imports: [
        CommonModule,
        AssinaturasModule
    ]
})
export class CertificadoNR5CIPAModule { }
