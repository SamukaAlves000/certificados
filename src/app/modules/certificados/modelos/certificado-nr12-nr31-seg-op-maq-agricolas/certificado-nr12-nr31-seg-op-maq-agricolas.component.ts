import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr12-nr31-seg-op-maq-agricolas',
  templateUrl: './certificado-nr12-nr31-seg-op-maq-agricolas.component.html',
  styleUrls: ['./certificado-nr12-nr31-seg-op-maq-agricolas.component.scss']
})
export class CertificadoNR12NR31SegOpMaqAgricolasComponent implements OnInit {

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
