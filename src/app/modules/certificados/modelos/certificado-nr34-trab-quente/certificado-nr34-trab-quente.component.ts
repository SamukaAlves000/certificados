import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr34-trab-quente',
  templateUrl: './certificado-nr34-trab-quente.component.html',
  styleUrls: ['./certificado-nr34-trab-quente.component.scss']
})
export class CertificadoNR34TrabQuenteComponent implements OnInit {

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
