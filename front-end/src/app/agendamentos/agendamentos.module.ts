import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosListComponent } from './agendamentos-list/agendamentos-list.component';
import { AgendamentosFormComponent } from './agendamentos-form/agendamentos-form.component';
import { AgendamentosFormEditComponent } from './agendamentos-form-edit/agendamentos-form-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { RodapeModule } from '../componentes/rodape/rodape.module';

@NgModule({
  declarations: [
    AgendamentosListComponent,
    AgendamentosFormComponent,
    AgendamentosFormEditComponent,
  ],
  imports: [
    CommonModule,
    CabecalhoModule,
    AgendamentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
    RodapeModule,
  ],
})
export class AgendamentosModule {}
