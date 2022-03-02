import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cetificado-nr23-brigada-incendio-i-p1',
  templateUrl: './cetificado-nr23-brigada-incendio-i-p1.component.html',
  styleUrls: ['./cetificado-nr23-brigada-incendio-i-p1.component.scss']
})
export class CetificadoNR23BrigadaIncendioIP1Component implements OnInit {

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
