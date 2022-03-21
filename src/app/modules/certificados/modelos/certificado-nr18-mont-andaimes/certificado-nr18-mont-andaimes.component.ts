import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificado-nr18-mont-andaimes',
  templateUrl: './certificado-nr18-mont-andaimes.component.html',
  styleUrls: ['./certificado-nr18-mont-andaimes.component.scss']
})
export class CertificadoNR18MontAndaimesComponent implements OnInit {


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
