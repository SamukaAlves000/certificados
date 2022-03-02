import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr11-sinalizacao-amarracao-carga',
  templateUrl: './certificado-nr11-sinalizacao-amarracao-carga.component.html',
  styleUrls: ['./certificado-nr11-sinalizacao-amarracao-carga.component.scss']
})
export class CertificadoNR11SinalizacaoAmarracaoCargaComponent implements OnInit {

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
