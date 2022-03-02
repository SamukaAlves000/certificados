import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from '../../modules/posts/posts.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {DashboardService} from '../../modules/dashboard/dashboard.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {ServicoComponent} from '../../modules/servico/servico.component';
import {MatButtonModule} from '@angular/material/button';
import {ServicoModule} from '../../modules/servico/servico.module';
import {ServicoService} from '../../modules/servico/servico.service';
import {MatIconModule} from '@angular/material/icon';
import {HomeComponent} from '../../modules/home/home.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CertificadosComponent} from '../../modules/certificados/certificados.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CertificadosCreateComponent} from '../../modules/certificados/certificados-create/certificados-create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {CertificadosViewComponent} from '../../modules/certificados/certificados-view/certificados-view.component';
import {ModelosModule} from '../../modules/certificados/modelos/modelos.module';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ServicoComponent,
    HomeComponent,
    CertificadosComponent,
    CertificadosCreateComponent,
    CertificadosViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    ServicoModule,
    MatIconModule,
    MatCarouselModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    ModelosModule,
  ],
  providers: [
    DashboardService,
    ServicoService
  ]
})
export class DefaultModule { }
