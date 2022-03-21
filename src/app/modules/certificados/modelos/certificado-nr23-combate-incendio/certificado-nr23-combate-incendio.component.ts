import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr23-combate-incendio',
  templateUrl: './certificado-nr23-combate-incendio.component.html',
  styleUrls: ['./certificado-nr23-combate-incendio.component.scss']
})
export class CertificadoNR23CombateIncendioComponent implements OnInit {

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
