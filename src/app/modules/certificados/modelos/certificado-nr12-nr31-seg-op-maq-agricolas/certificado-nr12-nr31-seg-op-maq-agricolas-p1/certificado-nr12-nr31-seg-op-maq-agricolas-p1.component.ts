import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr12-nr31-seg-op-maq-agricolas-p1',
  templateUrl: './certificado-nr12-nr31-seg-op-maq-agricolas-p1.component.html',
  styleUrls: ['./certificado-nr12-nr31-seg-op-maq-agricolas-p1.component.scss']
})
export class CertificadoNR12NR31SegOpMaqAgricolasP1Component implements OnInit {

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
