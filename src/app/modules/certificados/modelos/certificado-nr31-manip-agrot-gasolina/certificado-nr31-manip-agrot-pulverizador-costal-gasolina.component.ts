import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr31-manip-agrot-pulverizador-costal-gasolina',
  templateUrl: './certificado-nr31-manip-agrot-pulverizador-costal-gasolina.component.html',
  styleUrls: ['./certificado-nr31-manip-agrot-pulverizador-costal-gasolina.component.scss']
})
export class CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent implements OnInit {

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
