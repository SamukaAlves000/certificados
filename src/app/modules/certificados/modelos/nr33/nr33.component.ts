import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nr33',
  templateUrl: './nr33.component.html',
  styleUrls: ['./nr33.component.scss']
})
export class Nr33Component implements OnInit {

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
