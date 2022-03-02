import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr35-linha-vida',
  templateUrl: './certificado-nr35-linha-vida.component.html',
  styleUrls: ['./certificado-nr35-linha-vida.component.scss']
})
export class CertificadoNR35LinhaVidaComponent implements OnInit {

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
