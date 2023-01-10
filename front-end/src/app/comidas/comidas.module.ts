import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComidasRoutingModule } from './comidas-routing.module';
import { ComidasFormComponent } from './comidas-form/comidas-form.component';
import { ComidasListComponent } from './comidas-list/comidas-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ComidasFormEditComponent } from './comidas-form-edit/comidas-form-edit.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { RodapeModule } from '../componentes/rodape/rodape.module';

@NgModule({
  declarations: [
    ComidasFormComponent,
    ComidasListComponent,
    ComidasFormEditComponent,
  ],
  imports: [
    CommonModule,
    ComidasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
    CabecalhoModule,
    RodapeModule,
  ],
})
export class ComidasModule {}
