import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { MensagemModule } from '../../componentes/mensagem/mensagem.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UsuarioFormEditComponent } from './usuario-form-edit/usuario-form-edit.component';
import { CabecalhoModule } from '../../componentes/cabecalho/cabecalho.module';
import { RodapeModule } from '../../componentes/rodape/rodape.module';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    NovoUsuarioComponent,
    UsuarioFormEditComponent
  ],
  imports: [
    CommonModule,
    CabecalhoModule,
    UsuariosRoutingModule,
    MensagemModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RodapeModule
  ]
})
export class UsuariosModule { }
