import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr12-nr31-op-rocadeira-costas',
  templateUrl: './certificado-nr12-nr31-op-rocadeira-costas.component.html',
  styleUrls: ['./certificado-nr12-nr31-op-rocadeira-costas.component.scss']
})
export class CertificadoNR12NR31OpRocadeiraCostasComponent implements OnInit {


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
