import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr23-brigadade-incendio',
  templateUrl: './certificado-nr23-brigadade-incendio.component.html',
  styleUrls: ['./certificado-nr23-brigadade-incendio.component.scss']
})
export class CertificadoNR23BrigadadeIncendioComponent implements OnInit {

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
