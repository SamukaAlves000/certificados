import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosViewComponent } from './alunos-view/alunos-view.component';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {AppRoutingModule} from '../../app-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [AlunosViewComponent],
  exports: [
    AlunosViewComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
  ]
})
export class AlunosModule { }
