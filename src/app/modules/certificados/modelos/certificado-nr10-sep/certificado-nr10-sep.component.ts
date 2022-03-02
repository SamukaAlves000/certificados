import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr10-sep',
  templateUrl: './certificado-nr10-sep.component.html',
  styleUrls: ['./certificado-nr10-sep.component.scss']
})
export class CertificadoNR10SEPComponent implements OnInit {

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
