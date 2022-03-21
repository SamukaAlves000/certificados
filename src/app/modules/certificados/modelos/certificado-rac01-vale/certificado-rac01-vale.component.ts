import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-rac01-vale',
  templateUrl: './certificado-rac01-vale.component.html',
  styleUrls: ['./certificado-rac01-vale.component.scss']
})
export class CertificadoRAC01ValeComponent implements OnInit {

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
