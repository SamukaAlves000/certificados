import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr12-prot-maq-equipamentos',
  templateUrl: './certificado-nr12-prot-maq-equipamentos.component.html',
  styleUrls: ['./certificado-nr12-prot-maq-equipamentos.component.scss']
})
export class CertificadoNR12ProtMaqEquipamentosComponent implements OnInit {

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
