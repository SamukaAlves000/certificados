import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-rac01-vale-p1',
  templateUrl: './certificado-rac01-vale-p1.component.html',
  styleUrls: ['./certificado-rac01-vale-p1.component.scss']
})
export class CertificadoRAC01ValeP1Component implements OnInit {

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
