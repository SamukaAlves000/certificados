import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr12-ferramens-manuais-p1',
  templateUrl: './certificado-nr12-ferramens-manuais-p1.component.html',
  styleUrls: ['./certificado-nr12-ferramens-manuais-p1.component.scss']
})
export class CertificadoNR12FerramensManuaisP1Component implements OnInit {

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
