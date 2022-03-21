import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CertificadosService, DetalhesCertificado, IsCertificado} from '../certificados.service';
import {Router} from '@angular/router';


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
    razaoSocial: '',
    assiantura1: '',
    assiantura2: ''

  };

  isCertificados: IsCertificado = {
    modelos: []
  };

  constructor(private certificadoService: CertificadosService, private router: Router) {
  }


  ngOnInit(): void {
    if (!(localStorage.getItem('user') === 'true')) {
      this.router.navigate(['login']);
    }
    this.certificadoService.currentDetalhesCertificados.subscribe(value => {
      this.detalhesCertificados = value;
    });

    this.certificadoService.currentIsCertificado.subscribe(value => {
      this.isCertificados = value;
    });
  }

}
