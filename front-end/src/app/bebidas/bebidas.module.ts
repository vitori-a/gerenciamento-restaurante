import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidasRoutingModule } from './bebidas-routing.module';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BebidasFormComponent } from './bebidas-form/bebidas-form.component';
import { BebidasListComponent } from './bebidas-list/bebidas-list.component';
import { BebidasFormEditComponent } from './bebidas-form-edit/bebidas-form-edit.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { RodapeModule } from '../componentes/rodape/rodape.module';

@NgModule({
  declarations: [
    BebidasFormComponent,
    BebidasListComponent,
    BebidasFormEditComponent,
  ],
  imports: [
    CommonModule,
    CabecalhoModule,
    RodapeModule,
    BebidasRoutingModule,
    MensagemModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class BebidasModule {}
