import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr35-taludes',
  templateUrl: './certificado-nr35-taludes.component.html',
  styleUrls: ['./certificado-nr35-taludes.component.scss']
})
export class CertificadoNR35TaludesComponent implements OnInit {

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
