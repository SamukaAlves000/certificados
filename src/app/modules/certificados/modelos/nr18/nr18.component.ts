import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nr18',
  templateUrl: './nr18.component.html',
  styleUrls: ['./nr18.component.scss']
})
export class Nr18Component implements OnInit {

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
