import { EventosFormComponent } from './eventos-form/eventos-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosListComponent } from './eventos-list/eventos-list.component';
import { EventosResolver } from './guards/eventos.resolver';
import { EventosFormEditComponent } from './eventos-form-edit/eventos-form-edit.component';

const routes: Routes =
[
  {
    path: '',
    component: EventosListComponent
  },
  {
    path: 'novo',
    component: EventosFormComponent, resolve: {eventos: EventosResolver}
  },
  {
    path: 'editar/:id',
    component: EventosFormEditComponent, resolve: {eventos: EventosResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
