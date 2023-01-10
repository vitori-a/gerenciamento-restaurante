import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';

@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    CabecalhoModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
