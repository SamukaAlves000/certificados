import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr12-nr31-op-moto-poda',
  templateUrl: './certificado-nr12-nr31-op-moto-poda.component.html',
  styleUrls: ['./certificado-nr12-nr31-op-moto-poda.component.scss']
})
export class CertificadoNR12NR31OpMotoPodaComponent implements OnInit {

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
