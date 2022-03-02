import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nr18-p1',
  templateUrl: './nr18-p1.component.html',
  styleUrls: ['./nr18-p1.component.scss']
})
export class Nr18P1Component implements OnInit {

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
