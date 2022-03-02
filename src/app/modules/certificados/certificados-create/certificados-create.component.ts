import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {CertificadosService} from '../certificados.service';


export interface Aluno {
  id?: number;
  nome: string;
  cpf: string;
}

@Component({
  selector: 'app-certificados-create',
  templateUrl: './certificados-create.component.html',
  styleUrls: ['./certificados-create.component.scss']
})
export class CertificadosCreateComponent implements OnInit {
  certificadoForm: FormGroup;
  certificadoDetalhesForm: FormGroup;
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['nome', 'cpf', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  textoImportacao = '';
  alunos: Aluno[] = [];


  constructor(private formBuilder: FormBuilder, private router: Router, private certificadoService: CertificadosService) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.certificadoForm = this.formBuilder.group({
      nome: [''],
      cpf: [''],
    });

    this.certificadoDetalhesForm = this.formBuilder.group({
      cidade: ['', Validators.required],
      dataCurso: ['', Validators.required],
      cnpj: ['', Validators.required],
      horas: ['', Validators.required],
      razaoSocial: ['', Validators.required],
    });
  }

  addAluno(): void {
    this.alunos.push(this.certificadoForm.value);
    this.dataSource = new MatTableDataSource<Aluno>(this.alunos); // Set dataSource  like this
    this.certificadoForm.reset();

    this.certificadoService.changeDetalhesCertificado(
      {
        alunos: this.alunos,
        dataCurso: '',
        cidade: '',
        cnpj: '',
        horas: '',
        razaoSocial: ''
      }
    );
  }

  importar(): void {
    const linhas = this.textoImportacao.split('\n');
    linhas.forEach(value => {
      const info = value.split(';');
      this.alunos.push({nome: info[0], cpf: info[1]});
    });
    this.dataSource = new MatTableDataSource<Aluno>(this.alunos); // Set dataSource  like this
    this.certificadoService.changeDetalhesCertificado(
      {
        alunos: this.alunos,
        dataCurso: '',
        cidade: '',
        cnpj: '',
        horas: '',
        razaoSocial: ''
      }
    );
  }

  navigateToCertificadoView(): void {
    this.certificadoService.changeDetalhesCertificado(
      {
        alunos: this.alunos,
        dataCurso: this.certificadoDetalhesForm.value.dataCurso,
        cidade: this.certificadoDetalhesForm.value.cidade,
        cnpj: this.certificadoDetalhesForm.value.cnpj,
        horas: this.certificadoDetalhesForm.value.horas,
        razaoSocial: this.certificadoDetalhesForm.value. razaoSocial

      }
    );
    this.router.navigate(['/certificados/view']);
  }

}
