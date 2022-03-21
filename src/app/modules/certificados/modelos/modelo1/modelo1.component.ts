import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modelo1',
  templateUrl: './modelo1.component.html',
  styleUrls: ['./modelo1.component.scss']
})
export class Modelo1Component implements OnInit {

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

  public detailedPath: string | undefined;
  ngOnInit(): void {
    this.detailedPath = window.location.origin + '/certificados';
  }

}
