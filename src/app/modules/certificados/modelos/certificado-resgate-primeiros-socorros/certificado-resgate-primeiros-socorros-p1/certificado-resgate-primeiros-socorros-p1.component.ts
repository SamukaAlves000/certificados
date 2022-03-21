import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-resgate-primeiros-socorros-p1',
  templateUrl: './certificado-resgate-primeiros-socorros-p1.component.html',
  styleUrls: ['./certificado-resgate-primeiros-socorros-p1.component.scss']
})
export class CertificadoResgatePrimeirosSocorrosP1Component implements OnInit {

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
