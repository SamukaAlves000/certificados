import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr35-trabalho-altura-total',
  templateUrl: './certificado-nr35-trabalho-altura-total.component.html',
  styleUrls: ['./certificado-nr35-trabalho-altura-total.component.scss']
})
export class CertificadoNR35TrabalhoAlturaTOTALComponent implements OnInit {

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
