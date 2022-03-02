import { NgModule, LOCALE_ID } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { ServicoCreateComponent } from './servico-create/servico-create.component';
import { ServicoUpdateComponent } from './servico-update/servico-update.component';
import { ServicoDeleteComponent } from './servico-delete/servico-delete.component';
import { ServicoReadComponent } from './servico-read/servico-read.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {ServicoService} from './servico.service';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [ServicoCreateComponent, ServicoUpdateComponent, ServicoDeleteComponent, ServicoReadComponent],
  exports: [
    ServicoReadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatStepperModule,
    MatTabsModule,
    CurrencyMaskModule,
  ],
  providers: [
    ServicoService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ]
})
export class ServicoModule { }
