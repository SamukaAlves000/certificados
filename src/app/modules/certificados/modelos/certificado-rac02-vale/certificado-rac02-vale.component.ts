import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-rac02-vale',
  templateUrl: './certificado-rac02-vale.component.html',
  styleUrls: ['./certificado-rac02-vale.component.scss']
})
export class CertificadoRAC02ValeComponent implements OnInit {

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
