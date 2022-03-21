import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cetificado-nr23-brigada-incendio-i',
  templateUrl: './cetificado-nr23-brigada-incendio-i.component.html',
  styleUrls: ['./cetificado-nr23-brigada-incendio-i.component.scss']
})
export class CetificadoNR23BrigadaIncendioIComponent implements OnInit {

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
