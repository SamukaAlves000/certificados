import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Aluno} from './certificados-create/certificados-create.component';
import {CertificadosService, IsCertificado} from './certificados.service';


export interface Modelo {
  id?: number;
  nome?: string;
  fotos?: string[];
  isSelecionado?: boolean;
}

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent implements OnInit {

  slides = [{image: 'assets/images/carrosel/1.jpg'}, {image: 'assets/images/carrosel/2.jpg'},
    {image: 'assets/images/carrosel/3.jpg'}];

  profissionais = [{image: 'assets/images/profissionais/c1.png'}, {image: 'assets/images/profissionais/c2.jpg'},
    {image: 'assets/images/profissionais/c3.jpg'}];

  alunos: Aluno[] = [];
  isSelect: Modelo[] = [];

  isCertificados: IsCertificado = {
    modelos: []
  };

  modelos: Modelo[];

  constructor(private router: Router, private certificadoService: CertificadosService) {
  }


  ngOnInit(): void {

    this.certificadoService.currentIsCertificado.subscribe(value => {
      this.isCertificados = value;
      this.isSelect = this.isCertificados.modelos.filter(value1 => value1.isSelecionado === true);
    });
  }

  navigateToCertificadoCreate(): void {
    this.router.navigate(['/certificados/create']);
  }

  atualizar(): void {
    this.certificadoService.changeisCertificado(this.isCertificados);
  }

}
