import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosListComponent } from './eventos-list/eventos-list.component';
import { EventosFormComponent } from './eventos-form/eventos-form.component';
import { EventosFormEditComponent } from './eventos-form-edit/eventos-form-edit.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { RodapeModule } from '../componentes/rodape/rodape.module';


@NgModule({
  declarations: [
    EventosListComponent,
    EventosFormComponent,
    EventosFormEditComponent
  ],
  imports: [
    CommonModule,
    CabecalhoModule,
    EventosRoutingModule,
    MensagemModule,
    ReactiveFormsModule,
    FormsModule,
    RodapeModule
  ]
})
export class EventosModule { }
