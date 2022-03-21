import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr11-op-rolo-compactador',
  templateUrl: './certificado-nr11-op-rolo-compactador.component.html',
  styleUrls: ['./certificado-nr11-op-rolo-compactador.component.scss']
})
export class CertificadoNR11OpRoloCompactadorComponent implements OnInit {

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
