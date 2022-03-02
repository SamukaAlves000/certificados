import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr6-epis',
  templateUrl: './certificado-nr6-epis.component.html',
  styleUrls: ['./certificado-nr6-epis.component.scss']
})
export class CertificadoNR6EPISComponent implements OnInit {

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
