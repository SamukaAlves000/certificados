import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr11-amarracao-carga-p1',
  templateUrl: './certificado-nr11-amarracao-carga-p1.component.html',
  styleUrls: ['./certificado-nr11-amarracao-carga-p1.component.scss']
})
export class CertificadoNR11AmarracaoCargaP1Component implements OnInit {

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
