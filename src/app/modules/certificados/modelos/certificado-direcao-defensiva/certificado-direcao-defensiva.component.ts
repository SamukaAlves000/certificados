import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-direcao-defensiva',
  templateUrl: './certificado-direcao-defensiva.component.html',
  styleUrls: ['./certificado-direcao-defensiva.component.scss']
})
export class CertificadoDirecaoDefensivaComponent implements OnInit {

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
