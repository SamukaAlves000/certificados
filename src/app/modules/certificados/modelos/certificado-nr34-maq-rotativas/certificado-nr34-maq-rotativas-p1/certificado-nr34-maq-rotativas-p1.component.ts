import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr34-maq-rotativas-p1',
  templateUrl: './certificado-nr34-maq-rotativas-p1.component.html',
  styleUrls: ['./certificado-nr34-maq-rotativas-p1.component.scss']
})
export class CertificadoNR34MaqRotativasP1Component implements OnInit {

  @Input() nome: string;
  @Input() cpf: string;
  @Input() cidade: string;
  @Input() dataCurso: string;
  @Input()cnpj: string;
  @Input() horas: string;
  @Input()razaoSocial: string;
  @Input() assinatura1: string;
  @Input() assinatura2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
