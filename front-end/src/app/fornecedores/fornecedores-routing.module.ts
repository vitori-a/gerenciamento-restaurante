import { FornecedoresFormEditComponent } from './fornecedores-form-edit/fornecedores-form-edit.component';
import { FornecedoresFormComponent } from './fornecedores-form/fornecedores-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedoresListComponent } from './fornecedores-list/fornecedores-list.component';
import { FornecedoresResolver } from './guards/fornecedores.resolver';

const routes: Routes =
[
  {
    path: '',
    component: FornecedoresListComponent
  },
  {
    path: 'novo',
    component: FornecedoresFormComponent, resolve: {fornecedores: FornecedoresResolver}
  },
  {
    path: 'editar/:id',
    component: FornecedoresFormEditComponent, resolve: {fornecedores: FornecedoresResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedoresRoutingModule { }
