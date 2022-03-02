import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nr10',
  templateUrl: './nr10.component.html',
  styleUrls: ['./nr10.component.scss']
})
export class Nr10Component implements OnInit {

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
