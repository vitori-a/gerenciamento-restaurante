import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FuncionariosListComponent } from './funcionarios-list/funcionarios-list.component';
import { FuncionarioResolver } from './guards/funcionario.resolver';
import { FuncionariosFormEditComponent } from './funcionarios-form-edit/funcionarios-form-edit.component';

const routes: Routes =
[
  {
    path: '',
    component: FuncionariosListComponent
  },
  {
    path: 'novo',
    component: FuncionariosFormComponent, resolve: {funcionario: FuncionarioResolver}
  },
  {
    path: 'editar/:id',
    component: FuncionariosFormEditComponent, resolve: {funcionario: FuncionarioResolver}
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
