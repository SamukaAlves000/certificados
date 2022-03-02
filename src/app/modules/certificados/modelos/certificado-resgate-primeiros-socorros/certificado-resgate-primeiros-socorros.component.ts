import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-resgate-primeiros-socorros',
  templateUrl: './certificado-resgate-primeiros-socorros.component.html',
  styleUrls: ['./certificado-resgate-primeiros-socorros.component.scss']
})
export class CertificadoResgatePrimeirosSocorrosComponent implements OnInit {

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
