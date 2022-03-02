import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr33-supervisor-esp-confinado',
  templateUrl: './certificado-nr33-supervisor-esp-confinado.component.html',
  styleUrls: ['./certificado-nr33-supervisor-esp-confinado.component.scss']
})
export class CertificadoNR33SupervisorEspConfinadoComponent implements OnInit {

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
