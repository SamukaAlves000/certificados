import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {ServicoComponent} from './modules/servico/servico.component';
import {ServicoCreateComponent} from './modules/servico/servico-create/servico-create.component';
import {ServicoDeleteComponent} from './modules/servico/servico-delete/servico-delete.component';
import {ServicoUpdateComponent} from './modules/servico/servico-update/servico-update.component';
import {HomeComponent} from './modules/home/home.component';
import {CertificadosComponent} from './modules/certificados/certificados.component';
import {CertificadosCreateComponent} from './modules/certificados/certificados-create/certificados-create.component';
import {CertificadosViewComponent} from './modules/certificados/certificados-view/certificados-view.component';
import {AlunosComponent} from './modules/alunos/alunos.component';
const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'modelos/view',
        component: CertificadosComponent
      },
      {
        path: 'certificados/create',
        component: CertificadosCreateComponent
      },
      // {
      //   path: 'certificados/view',
      //   component: CertificadosViewComponent
      // },
      {
        path: 'alunos',
        component: AlunosComponent
      },
      {
        path: 'servicos',
        component: ServicoComponent
      },
      {
        path: 'servicos/create',
        component: ServicoCreateComponent
      },
      {
        path: 'servicos/delete/:idServico',
        component: ServicoDeleteComponent
      },
      {
        path: 'servicos/update/:idServico',
        component: ServicoUpdateComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
      path: 'certificados/view',
      component: CertificadosViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
