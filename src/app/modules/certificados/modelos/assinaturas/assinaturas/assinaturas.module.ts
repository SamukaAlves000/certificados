import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssinaturasComponent} from './assinaturas.component';



@NgModule({
  declarations: [AssinaturasComponent],
  exports: [
    AssinaturasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AssinaturasModule { }
