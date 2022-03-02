import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr26-nr36-produtos-quimicos',
  templateUrl: './certificado-nr26-nr36-produtos-quimicos.component.html',
  styleUrls: ['./certificado-nr26-nr36-produtos-quimicos.component.scss']
})
export class CertificadoNR26NR36ProdutosQuimicosComponent implements OnInit {

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
