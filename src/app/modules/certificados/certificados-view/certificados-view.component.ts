import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CertificadosService, DetalhesCertificado, IsCertificado} from '../certificados.service';


@Component({
  selector: 'app-certificados-view',
  templateUrl: './certificados-view.component.html',
  styleUrls: ['./certificados-view.component.scss']
})
export class CertificadosViewComponent implements OnInit {

  width: 1295;
  height: 918;

  detalhesCertificados: DetalhesCertificado = {
    alunos: [],
    dataCurso: '',
    cidade: '',
    cnpj: '',
    horas: '',
    razaoSocial: ''
  };

  isCertificados: IsCertificado = {
    modelos: []
  };

  constructor(private certificadoService: CertificadosService) {
  }


  ngOnInit(): void {
    this.certificadoService.currentDetalhesCertificados.subscribe(value => {
      this.detalhesCertificados = value;
    });

    this.certificadoService.currentIsCertificado.subscribe(value => {
      this.isCertificados = value;
    });
  }

}
