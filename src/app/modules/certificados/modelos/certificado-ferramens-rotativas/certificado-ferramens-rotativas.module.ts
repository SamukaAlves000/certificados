import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CertificadoFerramensRotativasP1Component} from './certificado-ferramens-rotativas-p1/certificado-ferramens-rotativas-p1.component';
import {CertificadoFerramensRotativasP2Component} from './certificado-ferramens-rotativas-p2/certificado-ferramens-rotativas-p2.component';


@NgModule({
  declarations: [CertificadoFerramensRotativasP1Component, CertificadoFerramensRotativasP2Component],
  exports: [
    CertificadoFerramensRotativasP1Component,
    CertificadoFerramensRotativasP2Component
  ],
  imports: [
    CommonModule
  ]
})
export class CertificadoFerramensRotativasModule {
}
