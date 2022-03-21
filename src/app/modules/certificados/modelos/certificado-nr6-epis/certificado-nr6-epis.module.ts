import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadoNR6EPISP1Component } from './certificado-nr6-epis-p1/certificado-nr6-epis-p1.component';
import { CertificadoNR6EPISP2Component } from './certificado-nr6-epis-p2/certificado-nr6-epis-p2.component';
import {AssinaturasModule} from '../assinaturas/assinaturas/assinaturas.module';



@NgModule({
    declarations: [CertificadoNR6EPISP1Component, CertificadoNR6EPISP2Component],
  exports: [
    CertificadoNR6EPISP1Component,
    CertificadoNR6EPISP2Component
  ],
    imports: [
        CommonModule,
        AssinaturasModule
    ]
})
export class CertificadoNR6EPISModule { }
