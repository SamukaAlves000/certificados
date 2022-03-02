import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr11-sinalizacao-amarracao-carga-p2',
  templateUrl: './certificado-nr11-sinalizacao-amarracao-carga-p2.component.html',
  styleUrls: ['./certificado-nr11-sinalizacao-amarracao-carga-p2.component.scss']
})
export class CertificadoNR11SinalizacaoAmarracaoCargaP2Component implements OnInit {

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
