import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr33-supervisor-esp-confinado-p1',
  templateUrl: './certificado-nr33-supervisor-esp-confinado-p1.component.html',
  styleUrls: ['./certificado-nr33-supervisor-esp-confinado-p1.component.scss']
})
export class CertificadoNR33SupervisorEspConfinadoP1Component implements OnInit {

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
