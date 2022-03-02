import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr11-op-trator-agricola',
  templateUrl: './certificado-nr11-op-trator-agricola.component.html',
  styleUrls: ['./certificado-nr11-op-trator-agricola.component.scss']
})
export class CertificadoNR11OpTratorAgricolaComponent implements OnInit {

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
