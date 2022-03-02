import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr11-op-trator-esteira',
  templateUrl: './certificado-nr11-op-trator-esteira.component.html',
  styleUrls: ['./certificado-nr11-op-trator-esteira.component.scss']
})
export class CertificadoNR11OpTratorEsteiraComponent implements OnInit {

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
