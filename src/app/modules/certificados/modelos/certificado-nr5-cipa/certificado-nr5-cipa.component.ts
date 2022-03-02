import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr5-cipa',
  templateUrl: './certificado-nr5-cipa.component.html',
  styleUrls: ['./certificado-nr5-cipa.component.scss']
})
export class CertificadoNR5CIPAComponent implements OnInit {

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
