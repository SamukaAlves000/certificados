import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr17-ergonomia',
  templateUrl: './certificado-nr17-ergonomia.component.html',
  styleUrls: ['./certificado-nr17-ergonomia.component.scss']
})
export class CertificadoNR17ErgonomiaComponent implements OnInit {
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
