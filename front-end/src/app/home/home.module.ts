import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { RouterModule } from '@angular/router';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
