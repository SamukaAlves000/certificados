import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Aluno} from '../../certificados/certificados-create/certificados-create.component';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-alunos-view',
  templateUrl: './alunos-view.component.html',
  styleUrls: ['./alunos-view.component.scss']
})
export class AlunosViewComponent implements OnInit {

  alunoForm: FormGroup;
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['nome', 'cpf', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  alunos: Aluno[] = [];
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.alunoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
    });
  }

  navigateToCertificadoView(): void {
    this.router.navigate(['/certificados/view']);
  }

  addAluno(): void {
    this.alunos.push(this.alunoForm.value);
    this.dataSource = new MatTableDataSource<Aluno>(this.alunos); // Set dataSource  like this
    this.alunoForm.reset();
  }

}
