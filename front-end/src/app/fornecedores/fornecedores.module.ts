import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FornecedoresListComponent } from './fornecedores-list/fornecedores-list.component';
import { FornecedoresFormComponent } from './fornecedores-form/fornecedores-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { FornecedoresFormEditComponent } from './fornecedores-form-edit/fornecedores-form-edit.component';
import { RodapeModule } from '../componentes/rodape/rodape.module';


@NgModule({
  declarations: [
    FornecedoresListComponent,
    FornecedoresFormComponent,
    FornecedoresFormEditComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
    CabecalhoModule,
    RodapeModule
  ]
})
export class FornecedoresModule { }
