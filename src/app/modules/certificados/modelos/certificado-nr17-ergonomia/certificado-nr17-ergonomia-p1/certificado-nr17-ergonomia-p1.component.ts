import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr17-ergonomia-p1',
  templateUrl: './certificado-nr17-ergonomia-p1.component.html',
  styleUrls: ['./certificado-nr17-ergonomia-p1.component.scss']
})
export class CertificadoNR17ErgonomiaP1Component implements OnInit {

  @Input() nome: string;
  @Input() cpf: string;
  @Input() cidade: string;
  @Input() dataCurso: string;
  @Input()cnpj: string;
  @Input() horas: string;
  @Input()razaoSocial: string;

  constructor() { }

  ngOnInit(): void {
  }

}
