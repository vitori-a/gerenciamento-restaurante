import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { FuncionariosListComponent } from './funcionarios-list/funcionarios-list.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosFormEditComponent } from './funcionarios-form-edit/funcionarios-form-edit.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { RodapeModule } from '../componentes/rodape/rodape.module';


@NgModule({
  declarations: [
    FuncionariosListComponent,
    FuncionariosFormComponent,
    FuncionariosFormEditComponent
  ],
  imports: [
    CommonModule,
    CabecalhoModule,
    RodapeModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }
