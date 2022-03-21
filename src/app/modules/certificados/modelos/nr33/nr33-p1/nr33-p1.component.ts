import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nr33-p1',
  templateUrl: './nr33-p1.component.html',
  styleUrls: ['./nr33-p1.component.scss']
})
export class Nr33P1Component implements OnInit {

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
