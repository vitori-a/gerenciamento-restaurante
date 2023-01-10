import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentosListComponent } from './agendamentos-list/agendamentos-list.component';
import { AgendamentosFormComponent } from './agendamentos-form/agendamentos-form.component';
import { AgendamentosFormEditComponent } from './agendamentos-form-edit/agendamentos-form-edit.component';
import { AgendamentosResolver } from './guards/agendamentos.resolver';

const routes: Routes = [
  {
    path: '',
    component: AgendamentosListComponent,
  },
  {
    path: 'novo',
    component: AgendamentosFormComponent,
    resolve: { agendamentos: AgendamentosResolver },
  },
  {
    path: 'editar/:id',
    component: AgendamentosFormEditComponent,
    resolve: { agendamentos: AgendamentosResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendamentosRoutingModule {}
