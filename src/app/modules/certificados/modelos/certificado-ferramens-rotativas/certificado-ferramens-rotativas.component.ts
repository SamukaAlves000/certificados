import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-ferramens-rotativas',
  templateUrl: './certificado-ferramens-rotativas.component.html',
  styleUrls: ['./certificado-ferramens-rotativas.component.scss']
})
export class CertificadoFerramensRotativasComponent implements OnInit {

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
