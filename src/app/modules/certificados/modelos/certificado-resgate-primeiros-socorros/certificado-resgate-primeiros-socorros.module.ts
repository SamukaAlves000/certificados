import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadoResgatePrimeirosSocorrosP1Component } from './certificado-resgate-primeiros-socorros-p1/certificado-resgate-primeiros-socorros-p1.component';
import { CertificadoResgatePrimeirosSocorrosP2Component } from './certificado-resgate-primeiros-socorros-p2/certificado-resgate-primeiros-socorros-p2.component';



@NgModule({
  declarations: [CertificadoResgatePrimeirosSocorrosP1Component, CertificadoResgatePrimeirosSocorrosP2Component],
  exports: [
    CertificadoResgatePrimeirosSocorrosP1Component,
    CertificadoResgatePrimeirosSocorrosP2Component
  ],
  imports: [
    CommonModule
  ]
})
export class CertificadoResgatePrimeirosSocorrosModule { }
