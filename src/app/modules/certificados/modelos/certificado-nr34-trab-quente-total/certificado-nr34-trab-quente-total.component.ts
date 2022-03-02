import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr34-trab-quente-total',
  templateUrl: './certificado-nr34-trab-quente-total.component.html',
  styleUrls: ['./certificado-nr34-trab-quente-total.component.scss']
})
export class CertificadoNR34TrabQuenteTOTALComponent implements OnInit {

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
